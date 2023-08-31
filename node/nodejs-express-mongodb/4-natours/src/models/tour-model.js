const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'A tour must have a name',
      unique: true,
    },
    slug: String,
    duration: {
      type: Number,
      required: 'Tour requires a duration',
    },
    maxGroupSize: {
      type: Number,
      required: 'Tour requires a group size',
    },
    difficulty: {
      type: String,
      required: 'Tour requires a difficulty level',
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: 'A tour must have a price',
    },
    discount: Number,
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: 'Tour requires a description',
    },
    imageCover: {
      type: String,
      required: 'Tour requires an image cover',
    },
    images: [String],
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    startDates: [Date],
    isSecret: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// Document middleware: runs before the save() command and .create()
tourSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre('save', (next) => {
//   console.log('Will save document...');
//   next();
// });

// tourSchema.post('save', (doc, next) => {
//   console.log(doc);
//   next();
// });

// Query middleware
// Before the query get executed
tourSchema.pre(/^find/, function (next) {
  this.find({
    isSecret: { $ne: true },
  });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function (documents, next) {
  console.log(`Query took ${Date.now() - this.start}ms`);
  next();
});

// Aggregation middleware
tourSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isSecret: { $ne: true } } });
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
