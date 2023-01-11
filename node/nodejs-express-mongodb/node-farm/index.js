const http = require('http');
const url = require('url');

const PORT = 8000;

const server = http.createServer((req, res) => {
  const { url: pathname } = req;

  if (pathname === '/' || pathname === '/overview') {
    res.end('This is the overview');
  } else if (pathname === '/product') {
    res.end('product');
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
