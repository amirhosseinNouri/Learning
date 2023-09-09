const mongoose = require('mongoose');
const validator = require('validator');
const bcript = require('bcrypt');
const {
  isPasswordConfirmationValid,
} = require('../validators/user-validators');

const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_SALT_ROUNDS = 12;

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
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcript.hash(this.password, PASSWORD_SALT_ROUNDS);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.isPasswordCorrect = function (
  candidatePassword,
  userPassword,
) {
  return bcript.compare(candidatePassword, userPassword);
};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
