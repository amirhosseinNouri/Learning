const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

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

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

const getTour = (id) => tours.find((item) => item.id === Number(id));

/**
 * Route handlers
 */
const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    ok: true,
    results: tours.length,
    data: { tours, requestedAt: req.requestTime },
  });
};

const getSingleTour = (req, res) => {
  const { id } = req.params;
  const tour = getTour(id);

  if (tour) {
    res.status(200).json({
      ok: true,
      data: { tour },
    });
    return;
  }

  res.status(404).json({
    ok: false,
    error: { message: 'Tour not found' },
  });
};

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1 || Date.now();
  const newTour = { ...req.body, id: newId };
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        ok: true,
        data: { tour: newTour },
      });
    },
  );
};

const updateTour = (req, res) => {
  const { id } = req.params;
  const tour = getTour(id);

  if (!tour) {
    res.status(401).json({
      ok: false,
      error: { message: 'Tour not found' },
    });
    return;
  }

  // update in FS
  res.status(200).json({ ok: true, data: { tour } });
};

const deleteTour = (req, res) => {
  const { id } = req.params;
  const tour = getTour(id);

  if (!tour) {
    res.status(401).json({
      ok: false,
      error: { message: 'Tour not found' },
    });
    return;
  }

  // update in FS

  res.status(204).json({ ok: true, data: null });
};

const getAllUsers = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    error: true,
    data: { message: 'Not implemented yet 😢' },
  });
};

/**
 * Routes
 */
app.route('/api/v1/tours').get(getAllTours).post(createTour);

app
  .route('/api/v1/tours/:id')
  .get(getSingleTour)
  .patch(updateTour)
  .delete(deleteTour);

app.route('/api/v1/users').get(getAllUsers).post(createUser);

app
  .route('/api/v1/users/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
