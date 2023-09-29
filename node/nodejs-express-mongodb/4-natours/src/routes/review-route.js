const express = require('express');
const reviewController = require('../controllers/review-controller');
const authenticationController = require('../controllers/authentication-controller');
const { USER, ADMIN } = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.use(authenticationController.isAuthenticated);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authenticationController.restrictTo(USER),
    reviewController.setTourAndUserId,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .delete(
    authenticationController.restrictTo(USER, ADMIN),
    reviewController.deleteReview,
  )
  .patch(
    authenticationController.restrictTo(USER, ADMIN),
    reviewController.updateReview,
  );

module.exports = router;
