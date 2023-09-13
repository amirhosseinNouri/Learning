const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcript = require('bcrypt');
const {
  isPasswordConfirmationValid,
} = require('../validators/user-validators');
const { convertLocalTimeZoneToUnix } = require('../utils/date');
const { ADMIN, GUIDE, LEAD_GUIDE, USER } = require('../constants/roles');

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_SALT_ROUNDS = 12;
const RESET_PASSWORD_TOKEN_BYTE_SIZE = 32;
const RESET_PASSWORD_EXPIRATION_MIN = 10;
const SECONDS_IN_ONE_MINUTE = 60;
const MIL_SECONDS_IN_ONE_SECOND = 1000;
const PASSWORD_CHANGED_MARGIN_IN_MIL_SECONDS = 1000;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'The name is required.',
  },
  email: {
    type: String,
    unique: true,
    required: 'The email address is required',
    lowercase: true,
    validate: [validator.isEmail, 'The email is not valid.'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: 'The password is required',
    minLength: PASSWORD_MIN_LENGTH,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: 'Please confirm your password',
    validate: [
      isPasswordConfirmationValid,
      'Password confirmation is not the same as the password',
    ],
  },
  passwordChangedAt: Date,
  role: {
    type: String,
    enum: [ADMIN, GUIDE, LEAD_GUIDE, USER],
    default: USER,
  },
  passwordResetToken: String,
  passwordResetExpire: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcript.hash(this.password, PASSWORD_SALT_ROUNDS);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.passwordChangedAt =
      Date.now() - PASSWORD_CHANGED_MARGIN_IN_MIL_SECONDS;
  }

  next();
});

userSchema.pre(/^find/, function (next) {
  // This point to the current query
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.isPasswordCorrect = function (
  candidatePassword,
  userPassword,
) {
  return bcript.compare(candidatePassword, userPassword);
};

userSchema.methods.hasChangedPasswordAfterTokenCreation = function (
  JwtTimestamp,
) {
  if (this.passwordChangedAt) {
    const passwordChangedAtInUnix = convertLocalTimeZoneToUnix(
      this.passwordChangedAt,
    );

    return JwtTimestamp < passwordChangedAtInUnix;
  }
  return false;
};

userSchema.methods.generatePasswordResetToken = function () {
  const token = crypto
    .randomBytes(RESET_PASSWORD_TOKEN_BYTE_SIZE)
    .toString('hex');

  // We store the encrypted version in the DB
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex');

  const passwordResetExpire =
    Date.now() +
    RESET_PASSWORD_EXPIRATION_MIN *
      SECONDS_IN_ONE_MINUTE *
      MIL_SECONDS_IN_ONE_SECOND;

  this.passwordResetExpire = passwordResetExpire;

  return token;
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
