const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

const appName = process.env.APP_NAME;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log(`Request served by ${appName}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
