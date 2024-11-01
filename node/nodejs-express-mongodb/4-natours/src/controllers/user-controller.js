const STATUS_CODE = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');
const User = require('../models/user-model');
const AppError = require('../utils/app-error');
const factory = require('../utils/handler-factory');

// Do not update password wit this
const getAllUsers = factory.getAll(User);
const getUser = factory.getOne(User);
const updateUser = factory.updateOne(User);
const deleteUser = factory.deleteOne(User);

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
      STATUS_CODE.BadRequest,
    );
  }

  const filteredBody = filterObject(req.body, 'name', 'email');

  const user = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  // update user document
  res.status(STATUS_CODE.Ok).json({
    ok: true,
    data: { user },
  });
});

const deleteUserAccount = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(STATUS_CODE.NoContent).json({
    ok: true,
  });
});

const getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

module.exports = {
  getAllUsers,
  getUser,
  updateUser,
  updateUserProfile,
  deleteUserAccount,
  deleteUser,
  getMe,
};
