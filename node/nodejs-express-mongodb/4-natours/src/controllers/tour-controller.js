const Tour = require('../models/tour-model');

// const getTour = (id) => tours.find((item) => item.id === Number(id));

const getAllTours = (req, res) => {
  res.status(200).json({
    ok: true,
    // results: tours.length,
    // data: { tours, requestedAt: req.requestTime },
  });
};

const getSingleTour = (req, res) => {
  // const { id } = req.params;
  // const tour = getTour(id);

  // if (tour) {
  //   res.status(200).json({
  //     ok: true,
  //     data: { tour },
  //   });
  //   return;
  // }

  res.status(404).json({
    ok: false,
    error: { message: 'Tour not found' },
  });
};

const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      ok: true,
      data: { tour: newTour },
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      data: { message: error },
    });
  }
};

const updateTour = (req, res) => {
  // const { id } = req.params;
  // const tour = getTour(id);

  // update in FS
  // res.status(200).json({ ok: true, data: { tour } });
  res.status(200).json({ ok: true });
};

const deleteTour = (req, res) => {
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
