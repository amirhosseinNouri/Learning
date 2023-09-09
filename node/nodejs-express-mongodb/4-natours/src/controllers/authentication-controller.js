const User = require('../models/user-model');
const {
  STATUS_CODE_CREATED,
  STATUS_CODE_BAD_REQUEST,
  STATUS_CODE_OK,
  STATUS_CODE_UNAUTHORIZED,
} = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');
const AppError = require('../utils/app-error');
const { signToken } = require('../services/auth');

const signup = catchAsync(async (req, res, next) => {
  const { name, email, password, passwordConfirm } = req.body;

  const newUser = await User.create({
    name,
    email,
    password,
    passwordConfirm,
  });

  const token = signToken(newUser._id);

  res.status(STATUS_CODE_CREATED).json({
    ok: true,
    token,
    data: { user: newUser },
  });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new AppError(
      'Please provide email and password',
      STATUS_CODE_BAD_REQUEST,
    );
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new AppError('Incorrect email or password', STATUS_CODE_UNAUTHORIZED);
  }

  const isPasswordCorrect = await user.isPasswordCorrect(
    password,
    user.password,
  );

  if (!isPasswordCorrect) {
    throw new AppError('Incorrect email or password', STATUS_CODE_UNAUTHORIZED);
  }

  const token = signToken(user._id);

  res.status(STATUS_CODE_OK).json({
    ok: true,
    data: { token },
  });
});

module.exports = { signup, login };
