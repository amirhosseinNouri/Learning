const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tour-route');
const userRouter = require('./routes/user-route');

const PORT = 3000;

const app = express();

/**
 * Middleware
 */
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Middleware ⛱️');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/**
 * Mounting routers
 */
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
