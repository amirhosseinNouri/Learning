const Tour = require('../models/tour-model');

const getAllTours = async (req, res) => {
  try {
    // Filtering by properties
    const queryObject = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((item) => delete queryObject[item]);

    // Range filtering
    const queryString = JSON.stringify(queryObject);
    const withMongoOperatorsQueryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`,
    );

    let query = Tour.find(JSON.parse(withMongoOperatorsQueryString));

    const { sort, fields } = req.query;

    // Sorting
    if (sort) {
      const sortBy = sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // Field limiting
    if (fields) {
      const selectingFields = fields.split(',').join(' ');
      query = query.select(selectingFields);
    } else {
      // Excluding
      query = query.select('-__v');
    }

    const tours = await query;

    res.status(200).json({
      ok: true,
      results: tours.length,
      data: { tours },
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      error: { message: error },
    });
  }
};

const getSingleTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    res.status(200).json({
      ok: true,
      data: { tour },
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      error: { message: 'Tour not found' },
    });
  }
};

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      ok: true,
      data: { tour: newTour },
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error: { message: error },
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ ok: true, data: { tour } });
  } catch (error) {
    res.status(404).json({
      ok: false,
      error: { message: error },
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    const { id } = req.params;
    await Tour.findByIdAndDelete(id);
    res.status(204).json({ ok: true });
  } catch (error) {
    res.status(404).json({
      ok: false,
      error: { message: error },
    });
  }
};

module.exports = {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
};
