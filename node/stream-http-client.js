const http = require('http');

http
  .request(
    {
      host: 'localhost',
      port: 8000,
      path: '/hello',
      method: 'POST',
    },
    (response) => {
      response.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
      });
    },
  )
  .end('Hello server');
