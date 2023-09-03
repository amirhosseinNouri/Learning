const DEFAULT_ERROR_STATUS_CODE = 500;

module.exports = (err, req, res, next) => {
  const { statusCode } = err || DEFAULT_ERROR_STATUS_CODE;

  res.status(statusCode).json({
    ok: false,
    error: { message: err.message },
  });
};
