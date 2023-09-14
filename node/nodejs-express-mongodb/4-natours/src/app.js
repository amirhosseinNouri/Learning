const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const tourRouter = require('./routes/tour-route');
const userRouter = require('./routes/user-route');
const AppError = require('./utils/app-error');
const globalErrorHandler = require('./controllers/error-controller');
const helmet = require('helmet');

const app = express();

/**
 * Global Middleware
 */

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  max: process.env.RATE_LIMIT_REQUEST,
  windowMs: Number(process.env.RATE_LIMIT_WINDOW),
  message: 'Too many request from this IP. Please try again in an hour',
}); // 100 request per hour

app.use('/api', limiter);

// Body parser
app.use(express.json({ limit: '10kb' }));

// Serving static files
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
