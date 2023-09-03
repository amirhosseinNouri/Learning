const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tour-route');
const userRouter = require('./routes/user-route');

const app = express();

/**
 * Middleware
 */

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

/**
 * Mounting routers
 */
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.all('*', (req, res, next) => {
  const error = new Error(`Route ${req.originalUrl} not implemented.`);
  error.statusCode = 404;
  next(error);
});

const DEFAULT_ERROR_STATUS_CODE = 500;

app.use((err, req, res, next) => {
  const { statusCode } = err || DEFAULT_ERROR_STATUS_CODE;

  res.status(statusCode).json({
    ok: false,
    error: { message: err.message },
  });
});

module.exports = app;
