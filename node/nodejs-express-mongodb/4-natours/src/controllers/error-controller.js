const DEFAULT_ERROR_STATUS_CODE = 500;

module.exports = (err, req, res, next) => {
  const { statusCode = DEFAULT_ERROR_STATUS_CODE } = err;

  res.status(statusCode).json({
    ok: false,
    error: { message: err.message },
  });
};
