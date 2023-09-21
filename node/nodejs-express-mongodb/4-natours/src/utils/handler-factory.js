const catchAsync = require('./catch-async');
const AppError = require('./app-error');
const { STATUS_CODE } = require('../constants/status-codes');

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

module.exports = {
  deleteOne,
  updateOne,
  createOne,
};
