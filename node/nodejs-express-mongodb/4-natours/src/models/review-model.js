const mongoose = require('mongoose');
const Tour = require('../models/tour-model');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: 'Review can not be empty',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: 'Review must belong to a tour',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: 'Review must belong to a user',
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
});

reviewSchema.post('save', function () {
  this.constructor.calculateAverageRatings(this.tour);
});

reviewSchema.statics.calculateAverageRatings = async function (tourId) {
  const [stats] = await this.aggregate([
    { $match: { tour: tourId } },
    {
      $group: {
        _id: '$tour',
        ratingsQuantity: { $sum: 1 },
        ratingsAverage: { $avg: '$rating' },
      },
    },
  ]);

  const { ratingsQuantity, ratingsAverage } = stats;

  await Tour.findByIdAndUpdate(tourId, {
    ratingsAverage,
    ratingsQuantity,
  });
};

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
