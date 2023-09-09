const mongoose = require('mongoose');
const validator = require('validator');

const PASSWORD_MIN_LENGTH = 8;

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
  },
  passwordConfirm: {
    type: String,
    required: 'Please confirm your password',
  },
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
