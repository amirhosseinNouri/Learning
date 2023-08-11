const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../mock/data/tours-simple.json`),
);

const validateTourId = (req, res, next) => {
  if (Number(req.params.id) > tours.length) {
    res.status(401).json({
      ok: false,
      error: { message: 'Tour not found' },
    });
    return;
  }

  next();
};

const validateCreateTourParams = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ ok: false, data: { message: 'Invalid name or price.' } });
  }

  next();
};

module.exports = {
  validateTourId,
  validateCreateTourParams,
};
