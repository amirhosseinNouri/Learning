const express = require('express');
const authenticateToken = require('./authenticate-token-middleware');

const app = express();

const articles = [
  {
    id: 1,
    name: 'amirhossein',
    title: 'First Article',
  },
  {
    id: 2,
    name: 'John Doe',
    title: 'Second Article',
  },
  {
    id: 3,
    name: 'Don Joe',
    title: 'Third Article',
  },
];

app.get('/articles', authenticateToken, (req, res) => {
  res.json(articles.filter((article) => req.user === article.name));
});

app.listen(4000, () => console.log('Server is running on 4000'));
