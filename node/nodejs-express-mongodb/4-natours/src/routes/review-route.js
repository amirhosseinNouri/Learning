const express = require('express');
const reviewController = require('../controllers/review-controller');
const authenticationController = require('../controllers/authentication-controller');
const { USER } = require('../constants/roles');

const router = express.Router();

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(USER),
    reviewController.createReview,
  );

module.exports = router;
