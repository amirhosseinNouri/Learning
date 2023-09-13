const {
  STATUS_CODE_OK,
  STATUS_CODE_BAD_REQUEST,
  STATUS_CODE_NO_CONTENT,
} = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');
const User = require('../models/user-model');
const AppError = require('../utils/app-error');

const getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();

  res.status(STATUS_CODE_OK).json({
    ok: true,
    data: { users },
  });
});
const getUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const filterObject = (obj, ...allowedFields) => {
  const filteredObject = {};

  Object.keys(obj).forEach((key) => {
    if (allowedFields.includes(key)) {
      filteredObject[key] = obj[key];
    }
  });

  return filteredObject;
};

const updateUserProfile = catchAsync(async (req, res, next) => {
  // prevent updating the password
  const { password, passwordConfirm } = req.body;

  if (password || passwordConfirm) {
    throw new AppError(
      'This route is not for updating the password. Please use /update-password',
      STATUS_CODE_BAD_REQUEST,
    );
  }

  const filteredBody = filterObject(req.body, 'name', 'email');

  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  // update user document
  res.status(STATUS_CODE_OK).json({
    ok: true,
    data: { user },
  });
});

const deleteUserAccount = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(STATUS_CODE_NO_CONTENT).json({
    ok: true,
  });
});

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  updateUserProfile,
  deleteUserAccount,
};
