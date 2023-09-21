const express = require('express');
const tourController = require('../controllers/tour-controller');
const authenticationController = require('../controllers/authentication-controller');
const { ADMIN, LEAD_GUIDE, USER } = require('../constants/roles');
const reviewController = require('../controllers/review-controller');

const router = express.Router();

router.route('/tour-stats').get(tourController.getTourStats);

router.route('/purge-test-documents').delete(tourController.purgeTestDocuments);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(authenticationController.isAuthenticated, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getSingleTour)
  .patch(tourController.updateTour)
  .delete(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(ADMIN, LEAD_GUIDE),
    tourController.deleteTour,
  );

router
  .route('/:tourId/review')
  .post(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(USER),
    reviewController.createReview,
  );

module.exports = router;
