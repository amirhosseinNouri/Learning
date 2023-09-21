const catchAsync = require('../utils/catch-async');
const Review = require('../models/review-model');
const {
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
} = require('../constants/status-codes');
const factory = require('../utils/handler-factory');

const getAllReviews = catchAsync(async (req, res) => {
  let queryFilters = {};

  const { tourId } = req.params;

  if (tourId) {
    queryFilters = { tour: tourId };
  }

  const reviews = await Review.find(queryFilters);

  res.status(STATUS_CODE_OK).json({
    ok: true,
    results: reviews.length,
    dat: { reviews },
  });
});

const createReview = catchAsync(async (req, res) => {
  // Nested routes
  if (!req.body.tour) {
    req.body.tour = req.params.tourId;
  }

  if (!req.body.user) {
    req.body.user = req.user.id;
  }

  const newReview = await Review.create(req.body);

  res.status(STATUS_CODE_CREATED).json({
    ok: true,
    data: { review: newReview },
  });
});

const deleteReview = factory.deleteOne(Review);
const updateReview = factory.updateOne(Review);

module.exports = {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
};
