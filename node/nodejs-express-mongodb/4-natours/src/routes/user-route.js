const express = require('express');
const userController = require('../controllers/user-controller');
const authenticationController = require('../controllers/authentication-controller');

const router = express.Router();

router.post('/signup', authenticationController.signup);
router.post('/login', authenticationController.login);

router.post('/forgot-password', authenticationController.forgotPassword);
router.patch('/reset-password/:token', authenticationController.resetPassword);

router.patch(
  '/update-password',
  authenticationController.isAuthenticated,
  authenticationController.updatePassword,
);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
