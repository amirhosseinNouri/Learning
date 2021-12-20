const http = require('http');

const PORT = 8080;

const requestHandler = (req, res) => {
  res.writeHead(200);
  res.end('Hi');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
