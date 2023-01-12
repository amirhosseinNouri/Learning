const http = require('http');
const url = require('url');
const fs = require('fs');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replace-template');

const PORT = 8000;

const overviewTemplate = fs.readFileSync(
  `${__dirname}/templates/overview-template.html`,
  'utf-8',
);
const cardTemplate = fs.readFileSync(
  `${__dirname}/templates/product-card-template.html`,
  'utf-8',
);
const productTemplate = fs.readFileSync(
  `${__dirname}/templates/product-template.html`,
  'utf-8',
);
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const slugs = dataObject.map((item) =>
  slugify(item.productName, { lower: true }),
);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  /**
   * Overview page
   */
  if (pathname === '/' || pathname === '/overview') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });

    const cardsHTML = dataObject
      .map((item) => replaceTemplate(cardTemplate, item))
      .join('');

    const output = overviewTemplate.replace('{%PRODUCT_CARDS%}', cardsHTML);
    res.end(output);
    /**
     * Product page
     */
  } else if (pathname === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });

    const product = dataObject[query.id];

    const output = replaceTemplate(productTemplate, product);

    res.end(output);
    /**
     * API
     */
  } else if (pathname === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    res.end(data);
    /**
     * Not found
     */
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'test',
    });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(PORT, '127.0.0.1', () =>
  console.log(`Server is running on ${PORT}`),
);
