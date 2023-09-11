const crypto = require('crypto');
const User = require('../models/user-model');
const {
  STATUS_CODE_CREATED,
  STATUS_CODE_BAD_REQUEST,
  STATUS_CODE_OK,
  STATUS_CODE_UNAUTHORIZED,
  STATUS_CODE_FORBIDDEN,
  STATUS_CODE_INTERNAL_SERVER_ERROR,
} = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');
const AppError = require('../utils/app-error');
const { signToken, decodeToken } = require('../services/auth');
const sendEmail = require('../services/email');

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

const forgotPassword = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(`There is no user with ${email} email address`);
  }

  const resetToken = user.generatePasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${req.protocol}://${req.get(
    'host',
  )}/api/v1/users/reset-password/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and password confirm to ${resetUrl}.
  If you did not ignore your password, please ignore this email`;

  try {
    await sendEmail({
      email: user.email,
      subject: 'Your password reset token (valid for 10 mins)',
      message,
    });
  } catch (error) {
    user.passwordResetToken = undefined;
    user.passwordResetExpire = undefined;
    await user.save({ validateBeforeSave: false });

    throw new AppError(
      'There was an error sending the email. Please try again',
      STATUS_CODE_INTERNAL_SERVER_ERROR,
    );
  }

  res.status(STATUS_CODE_OK).json({
    ok: true,
    data: { message: 'Token sent to email' },
  });
});

const resetPassword = catchAsync(async (req, res, next) => {
  // Get user based on the token
  const { token } = req.params;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  // Set new password if only token is not expired and there is user
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpire: { $gt: Date.now() },
  });

  if (!user) {
    throw new AppError(
      'Reset password token is invalid or has expired.',
      STATUS_CODE_BAD_REQUEST,
    );
  }

  const { password, passwordConfirm } = req.body;

  // Update user properties
  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpire = undefined;
  await user.save();

  // Log the user in
  const newLoginToken = signToken(user._id);

  res.status(STATUS_CODE_OK).json({
    ok: true,
    data: { token: newLoginToken },
  });
});

module.exports = {
  signup,
  login,
  isAuthenticated,
  restrictTo,
  forgotPassword,
  resetPassword,
};
