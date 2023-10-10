const STATUS_CODE = require('../constants/status-codes');
const Review = require('../models/review-model');
const catchAsync = require('../utils/catch-async');
const factory = require('../utils/handler-factory');

const getTourIdBasedOnQueryParams = (req) => {
  const { tourId } = req.params;

  if (tourId) {
    return { tour: tourId };
  }
};

// Nested routes
const setTourAndUserId = (req, res, next) => {
  if (!req.body.tour) {
    req.body.tour = req.params.tourId;
  }

  if (!req.body.user) {
    req.body.user = req.user.id;
  }
  next();
};

const deleteTourReviews = catchAsync(async (req, res) => {
  const { tourId } = req.params;

  await Review.deleteMany({ tour: tourId });

  res.status(STATUS_CODE.NoContent).json({
    ok: true,
  });
});

const getAllReviews = factory.getAll(Review, getTourIdBasedOnQueryParams);
const createReview = factory.createOne(Review);
const getReview = factory.getOne(Review);
const deleteReview = factory.deleteOne(Review);
const updateReview = factory.updateOne(Review);

module.exports = {
  getAllReviews,
  createReview,
  getReview,
  deleteReview,
  updateReview,
  setTourAndUserId,
  deleteTourReviews,
};
