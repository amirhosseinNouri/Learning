const catchAsync = require('./catch-async');
const AppError = require('./app-error');
const { ERROR_NOT_FOUND } = require('../constants/error-codes');

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);

    if (!document) {
      next(new AppError(`No document found with ${id} id.`, ERROR_NOT_FOUND));
      return;
    }

    res.status(204).json({ ok: true });
  });

module.exports = {
  deleteOne,
};
