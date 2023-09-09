const { STATUS_CODE_OK } = require('../constants/status-codes');
const catchAsync = require('../utils/catch-async');
const User = require('../models/user-model');

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

const deleteUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
