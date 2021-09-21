const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const generateAccessToken = require('./generate-token');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = generateAccessToken(user);
  res.json({ accessToken });
});

app.listen(5000, () => console.log('Auth server is running on 5000'));
