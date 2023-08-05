const express = require('express');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/user-controller');

const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);

router.route(':id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
