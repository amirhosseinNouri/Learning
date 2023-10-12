const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const tourRouter = require('./routes/tour-route');
const userRouter = require('./routes/user-route');
const reviewRouter = require('./routes/review-route');
const AppError = require('./utils/app-error');
const globalErrorHandler = require('./controllers/error-controller');
const STATUS_CODE = require('./constants/status-codes');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

/**
 * Global Middleware
 */

// Serving static files
app.use(express.static(path.join(__dirname, '../public')));

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

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization gainst XSS
app.use(xss());

// HTTP parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsAverage',
      'ratingsQuantity',
      'difficulty',
      'price',
    ],
  }),
);

/**
 * Mounting routers
 */

app.get('/', (req, res) => {
  res.status(STATUS_CODE.Ok).render('base');
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Route ${req.originalUrl} not implemented.`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
