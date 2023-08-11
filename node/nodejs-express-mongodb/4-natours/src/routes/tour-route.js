const express = require('express');
const {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tour-controller');
const {
  validateTourId,
  validateCreateTourParams,
} = require('../validators/tour-validators');

const router = express.Router();

router.param('id', validateTourId);

router.route('/').get(getAllTours).post(validateCreateTourParams, createTour);

router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
