const express = require('express');
const userController = require('../controllers/user-controller');
const authenticationController = require('../controllers/authentication-controller');
const { ADMIN } = require('../constants/roles');

const router = express.Router();

router.post('/signup', authenticationController.signup);
router.post('/login', authenticationController.login);

router.post('/forgot-password', authenticationController.forgotPassword);
router.patch('/reset-password/:token', authenticationController.resetPassword);

// Adding middleware so that all the following actions are authenticated.
router.use(authenticationController.isAuthenticated);

router.patch('/update-password', authenticationController.updatePassword);

router.get('/me', userController.getMe, userController.getUser);

router.patch('/update-user-profile', userController.updateUserProfile);

router.delete('/delete-user-account', userController.deleteUserAccount);

// Restrict the following actions
router.use(authenticationController.restrictTo(ADMIN));

router.route('/').get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
