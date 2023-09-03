const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tour-route');
const userRouter = require('./routes/user-route');
const AppError = require('./utils/app-error');
const globalErrorHandler = require('./controllers/error-controller');

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
  next(new AppError(`Route ${req.originalUrl} not implemented.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
