const express = require('express');
const tourController = require('../controllers/tour-controller');
const authenticationController = require('../controllers/authentication-controller');

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
  .delete(tourController.deleteTour);

module.exports = router;
