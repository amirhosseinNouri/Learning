const STATUS_CODE = require('../constants/status-codes');
const Tour = require('../models/tour-model');
const AppError = require('../utils/app-error');
const catchAsync = require('../utils/catch-async');
const factory = require('../utils/handler-factory');
const { getEarthRadius } = require('../utils/geo');
const { ONE_METER_IN_MI, ONE_METER_IN_KM } = require('../constants/geo');

const getAllTours = factory.getAll(Tour);
const getSingleTour = factory.getOne(Tour, { path: 'reviews' });
const createTour = factory.createOne(Tour);
const updateTour = factory.updateOne(Tour);
const deleteTour = factory.deleteOne(Tour);

const aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = 'sort=-ratingAverage,price';
  req.query.fields = 'name,price.ratingAverage,summary,difficulty';
  next();
};

const getTourStats = catchAsync(async (req, res, next) => {
  /**
   * Executes each state on each document
   */
  const stats = await Tour.aggregate([
    { $match: { ratingsAverage: { $gte: 4.5 } } },
    {
      $group: {
        /**
         * Create groups based on this field.
         * If `null`, we get a single group
         */
        _id: { $toUpper: '$difficulty' },
        numOfRatings: { $sum: '$ratingsQuantity' },
        numOfTours: { $sum: 1 }, // Add one for each document
        averageRating: { $avg: '$ratingsAverage' },
        averagePrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        tours: { $push: '$name' },
      },
    },
    {
      $sort: { averagePrice: 1 },
    },
    // { $match: { _id: { $ne: 'EASY' } } },
  ]);

  res.status(200).json({
    ok: true,
    data: { stats },
  });
});

const getMonthlyPlan = catchAsync(async (req, res, next) => {
  const year = Number(req.params.year);

  const plan = await Tour.aggregate([
    { $unwind: '$startDates' },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      $group: {
        _id: { $month: '$startDates' }, // Stage operator
        numberOfTours: { $sum: 1 },
        tours: { $push: '$name' },
      },
    },
    { $addFields: { month: '$_id' } },
    {
      $project: {
        _id: 0,
      },
    },
    { $sort: { numberOfTours: -1 } },
    { $limit: 12 },
  ]);

  res.status(200).json({
    ok: true,
    total: plan.length,
    data: { plan },
  });
});

const purgeTestDocuments = catchAsync(async (req, res, next) => {
  const { deletedCount } = await Tour.deleteMany({ name: { $regex: /^test/ } });
  res.status(204).json({
    ok: true,
    data: { deletedCount },
  });
});

const getToursWithin = catchAsync(async (req, res) => {
  const { distance, unit, latlng } = req.params;
  // -40,40
  const [lat, lng] = latlng.split(',');

  if (!lat || !lng) {
    throw new AppError('latlng is required in the format of lat,lng.');
  }

  const radius = distance / getEarthRadius(unit);

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(STATUS_CODE.Ok).json({
    ok: true,
    results: tours.length,
    data: { tours },
  });
});

const getDistances = catchAsync(async (req, res) => {
  const { unit, latlng } = req.params;
  // -40,40
  const [lat, lng] = latlng.split(',');

  if (!lat || !lng) {
    throw new AppError('latlng is required in the format of lat,lng.');
  }

  const multiplier = unit === 'mi' ? ONE_METER_IN_MI : ONE_METER_IN_KM;

  const distances = await Tour.aggregate([
    {
      // Should be the first stage in the pipeline
      $geoNear: {
        // The point that will used in calculation
        near: { type: 'Point', coordinates: [Number(lng), Number(lat)] },
        // calculation result will be stored here
        distanceField: 'distance',
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(STATUS_CODE.Ok).json({
    ok: true,
    results: distances.length,
    data: { distances },
  });
});

module.exports = {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
  purgeTestDocuments,
  getToursWithin,
  getDistances,
};
