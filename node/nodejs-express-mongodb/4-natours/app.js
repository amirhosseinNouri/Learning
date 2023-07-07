const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can post to this endpoint');
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
