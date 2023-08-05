const express = require('express');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

const getTour = (id) => tours.find((item) => item.id === Number(id));

const getAllTours = (req, res) => {
  res.status(200).json({
    ok: true,
    results: tours.length,
    data: { tours },
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

/**
 * GET
 */
app.get('/api/v1/tours', getAllTours);
app.get('/api/v1/tours/:id', getSingleTour);

/**
 * POST
 */
app.post('/api/v1/tours', createTour);

/**
 * PATCH
 */
app.patch('/api/v1/tours/:id', updateTour);

/**
 * DELETE
 */
app.delete('/api/v1/tours/:id', deleteTour);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
