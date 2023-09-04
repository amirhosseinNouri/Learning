const { ERROR_INTERNAL_SERVER_ERROR } = require('../constants/error-codes');

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

  // Operational errors (generated by server)
  if (err.isOperational) {
    res.status(statusCode).json({
      ok: false,
      error: { message: err.message },
    });
    return;
  }

  console.error(`🔴 ERROR: ${err}`);

  // programming errors
  res.status(ERROR_INTERNAL_SERVER_ERROR).json({
    ok: false,
    error: { message: 'Something went wrong!.' },
  });
};

module.exports = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    sendDevelopmentError(err, res);
    return;
  }

  sendProductionError(err, res);
};
