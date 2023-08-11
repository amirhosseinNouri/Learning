const express = require('express');
const {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  validateTourId,
} = require('../controllers/tour-controller');

const router = express.Router();

router.param('id', validateTourId);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
