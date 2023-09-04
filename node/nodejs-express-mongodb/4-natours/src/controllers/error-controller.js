const DEFAULT_ERROR_STATUS_CODE = 500;

const sendDevelopmentError = (err, res) => {
  const { statusCode = DEFAULT_ERROR_STATUS_CODE } = err;

  res.status(statusCode).json({
    ok: false,
    error: { message: err.message, stack: err.stack, error: err },
  });
};

const sendProductionError = (err, res) => {
  const { statusCode = DEFAULT_ERROR_STATUS_CODE } = err;

  res.status(statusCode).json({
    ok: false,
    error: { message: err.message },
  });
};

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, res);
    return;
  }

  sendProductionError(err, res);
};
