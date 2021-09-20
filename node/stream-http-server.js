const http = require('http');
const PORT = 8000;
const handler = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  request.on('data', (chunk) => {
    response.write(chunk.toString().toUpperCase());
  });

  request.on('end', () => {
    response.end();
  });
};

const server = http.createServer(handler);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
