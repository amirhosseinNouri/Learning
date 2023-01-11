const http = require('http');
const url = require('url');
const fs = require('fs');

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

const replaceTemplate = (template, product) => {
  const { productName, image, price, from, nutrients, quantity, id } = product;

  return template
    .replace(/{%PRODUCT_NAME%}/g, productName)
    .replace(/{%PRODUCT_IMAGE%}/g, image)
    .replace(/{%PRODUCT_PRICE%}/g, price)
    .replace(/{%PRODUCT_FROM%}/g, from)
    .replace(/{%PRODUCT_NUTRIENTS%}/g, nutrients)
    .replace(/{%PRODUCT_QUANTITY%}/g, quantity)
    .replace(/{%PRODUCT_ID%}/g, id)
    .replace(/{%PRODUCT_NOT_ORGANIC%}/g, product.organic ? '' : 'not-organic');
};

const server = http.createServer((req, res) => {
  const { url: pathname } = req;

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
    res.end('product');
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
