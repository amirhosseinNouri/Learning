const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

const getTour = (id) => tours.find((item) => item.id === Number(id));

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

module.exports = {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
};
