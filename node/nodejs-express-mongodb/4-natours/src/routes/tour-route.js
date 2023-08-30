const express = require('express');
const {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
} = require('../controllers/tour-controller');

const router = express.Router();

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getSingleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
