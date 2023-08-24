const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'A tour must have a name',
    unique: true,
  },
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
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
