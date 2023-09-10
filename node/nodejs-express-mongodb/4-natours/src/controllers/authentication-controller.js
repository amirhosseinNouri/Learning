const User = require('../models/user-model');
const {
  STATUS_CODE_CREATED,
  STATUS_CODE_BAD_REQUEST,
  STATUS_CODE_OK,
  STATUS_CODE_UNAUTHORIZED,
  STATUS_CODE_FORBIDDEN,
} = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');
const AppError = require('../utils/app-error');
const { signToken, decodeToken } = require('../services/auth');

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

const isAuthenticated = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;

  let token;

  // Check if JWT token is present inside the header
  if (authorization && authorization.startsWith('Bearer')) {
    // eslint-disable-next-line no-undef
    [_, token] = authorization.split(' ');
  }

  if (!token) {
    throw new AppError('You are not logged in.', STATUS_CODE_UNAUTHORIZED);
  }

  // Token verification
  const decodedToken = await decodeToken(token, process.env.JWT_SECRET);

  // Check if user still exits
  const freshUser = await User.findById(decodedToken.id);

  if (!freshUser) {
    throw new AppError('User no longer exits', STATUS_CODE_UNAUTHORIZED);
  }

  // Check if users has changed the password after token creation
  if (freshUser.hasChangedPasswordAfterTokenCreation(decodedToken.iat)) {
    throw new AppError(
      'User has changes the password recently. Please login again',
      STATUS_CODE_UNAUTHORIZED,
    );
  }

  req.user = freshUser;
  next();
});

const restrictTo = (...roles) =>
  catchAsync(async (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError(
        'You do not have permission to perform this action',
        STATUS_CODE_FORBIDDEN,
      );
    }

    next();
  });
module.exports = { signup, login, isAuthenticated, restrictTo };
