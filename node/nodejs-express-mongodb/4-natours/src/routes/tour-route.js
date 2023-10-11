const express = require('express');
const tourController = require('../controllers/tour-controller');
const authenticationController = require('../controllers/authentication-controller');
const { ADMIN, LEAD_GUIDE, GUIDE } = require('../constants/roles');
const reviewRouter = require('./review-route');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router
  .route('/tour-stats')
  .get(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(ADMIN, LEAD_GUIDE, GUIDE),
    tourController.getTourStats,
  );

router.route('/purge-test-documents').delete(tourController.purgeTestDocuments);

router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(ADMIN, LEAD_GUIDE),
    tourController.createTour,
  );

router
  .route('/:id')
  .get(tourController.getSingleTour)
  .patch(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(ADMIN, LEAD_GUIDE),
    tourController.updateTour,
  )
  .delete(
    authenticationController.isAuthenticated,
    authenticationController.restrictTo(ADMIN, LEAD_GUIDE),
    tourController.deleteTour,
  );

module.exports = router;
