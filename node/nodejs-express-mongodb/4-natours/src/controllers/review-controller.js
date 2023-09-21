const catchAsync = require('../utils/catch-async');
const Review = require('../models/review-model');
const {
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
} = require('../constants/status-codes');

const getAllReviews = catchAsync(async (req, res) => {
  const reviews = await Review.find();

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

module.exports = {
  getAllReviews,
  createReview,
};
