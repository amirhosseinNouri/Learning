const jwt = require('jsonwebtoken');
const User = require('../models/user-model');
const { STATUS_CODE_CREATED } = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');

const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });

  res.status(STATUS_CODE_CREATED).json({
    ok: true,
    token,
    data: { user: newUser },
  });
});

module.exports = { signup };
