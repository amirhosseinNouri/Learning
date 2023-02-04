const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const emitter = new Sales();

emitter.on('newSale', () => {
  console.log('There was a new sale');
});

emitter.on('newSale', () => {
  console.log('Customer name: Amirhossein');
});

emitter.on('newSale', (stock) =>
  console.log(`There are nor ${stock} items left in stock.`),
);

emitter.emit('newSale', 9);

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Request received');
  console.log(req.url);
  res.end('Request received');
});

server.on('request', (req, res) => {
  console.log('Another received 😆');
});

server.on('close', () => console.log('Server closed'));

server.listen(8000, '127.0.0.1', () =>
  console.log('Server is running on port 8000'),
);
