const catchAsync = require('./catch-async');
const AppError = require('./app-error');
const STATUS_CODE = require('../constants/status-codes');
const APIFeatures = require('./api-features');

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);

    if (!document) {
      next(
        new AppError(`No document found with ${id} id.`, STATUS_CODE.NotFound),
      );
      return;
    }

    res.status(STATUS_CODE.NoContent).json({ ok: true });
  });

const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!document) {
      next(
        new AppError(`No document found with ${id} id.`, STATUS_CODE.NotFound),
      );
      return;
    }

    res.status(STATUS_CODE.Ok).json({ ok: true, data: { document } });
  });

const createOne = (Model) =>
  catchAsync(async (req, res) => {
    const newDocument = await Model.create(req.body);

    res.status(STATUS_CODE.Created).json({
      ok: true,
      data: { document: newDocument },
    });
  });

const getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    let query = Model.findById(id);

    if (populateOptions) {
      query = query.populate(populateOptions);
    }

    const document = await query;

    if (!document) {
      next(
        new AppError(`No document found with ${id} id.`, STATUS_CODE.NotFound),
      );
      return;
    }

    res.status(STATUS_CODE.Ok).json({
      ok: true,
      data: { document },
    });
  });

const getAll = (Model, queryFilterCreator) =>
  catchAsync(async (req, res) => {
    let queryFilters = {};

    if (queryFilterCreator) {
      queryFilters = queryFilterCreator(req);
    }
    const features = new APIFeatures(Model.find(queryFilters), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const document = await features.query;

    res.status(200).json({
      ok: true,
      results: document.length,
      data: { document },
    });
  });

module.exports = {
  deleteOne,
  updateOne,
  createOne,
  getOne,
  getAll,
};
