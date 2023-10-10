const mongoose = require('mongoose');
const Tour = require('./tour-model');

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

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

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
  const aggregationResult = await this.aggregate([
    { $match: { tour: tourId } },
    {
      $group: {
        _id: '$tour',
        ratingsQuantity: { $sum: 1 },
        ratingsAverage: { $avg: '$rating' },
      },
    },
  ]);

  if (aggregationResult.length === 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
    });
    return;
  }

  const [stats] = aggregationResult;
  const { ratingsQuantity, ratingsAverage } = stats;

  await Tour.findByIdAndUpdate(tourId, {
    ratingsAverage,
    ratingsQuantity,
  });
};

// findByIdAndUpdate
// findByIdAndDelete
reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.review = await this.clone().findOne();
  next();
});

reviewSchema.post(/^findOneAnd/, async function () {
  const { constructor, tour } = this.review;
  constructor.calculateAverageRatings(tour);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
