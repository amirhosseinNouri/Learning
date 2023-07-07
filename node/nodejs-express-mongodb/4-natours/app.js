const express = require('express');
const fs = require('fs');

const PORT = 3000;

const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`),
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    ok: true,
    results: tours.length,
    data: { tours },
  });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
