const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tour-route');
const userRouter = require('./routes/user-route');

const app = express();

/**
 * Middleware
 */
app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(`${__dirname}/../public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/**
 * Mounting routers
 */
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
