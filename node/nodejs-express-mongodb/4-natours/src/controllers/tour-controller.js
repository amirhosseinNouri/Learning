const Tour = require('../models/tour-model');
const APIFeatures = require('../utils/api-features');
const catchAsync = require('../utils/catch-async');
const AppError = require('../utils/app-error');
const { ERROR_NOT_FOUND } = require('../constants/error-codes');

const getAllTours = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const tours = await features.query;

  res.status(200).json({
    ok: true,
    results: tours.length,
    data: { tours },
  });
});

const getSingleTour = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const tour = await Tour.findById(id);

  if (!tour) {
    next(new AppError(`No tour found with ${id} id.`, ERROR_NOT_FOUND));
    return;
  }

  res.status(200).json({
    ok: true,
    data: { tour },
  });
});

const createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    ok: true,
    data: { tour: newTour },
  });
});

const updateTour = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const tour = await Tour.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tour) {
    next(new AppError(`No tour found with ${id} id.`, ERROR_NOT_FOUND));
    return;
  }

  res.status(200).json({ ok: true, data: { tour } });
});

const deleteTour = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const tour = await Tour.findByIdAndDelete(id);

  if (!tour) {
    next(new AppError(`No tour found with ${id} id.`, ERROR_NOT_FOUND));
    return;
  }

  res.status(204).json({ ok: true });
});

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
};
