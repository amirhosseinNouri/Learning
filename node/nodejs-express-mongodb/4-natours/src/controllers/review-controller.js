const catchAsync = require('../utils/catch-async');
const Review = require('../models/review-model');
const { STATUS_CODE } = require('../constants/status-codes');
const factory = require('../utils/handler-factory');

const getAllReviews = catchAsync(async (req, res) => {
  let queryFilters = {};

  const { tourId } = req.params;

  if (tourId) {
    queryFilters = { tour: tourId };
  }

  const reviews = await Review.find(queryFilters);

  res.status(STATUS_CODE.Ok).json({
    ok: true,
    results: reviews.length,
    dat: { reviews },
  });
});

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

const createReview = factory.createOne(Review);
const deleteReview = factory.deleteOne(Review);
const updateReview = factory.updateOne(Review);

module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setTourAndUserId,
};
