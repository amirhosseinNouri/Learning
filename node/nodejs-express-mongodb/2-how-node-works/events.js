const EventEmitter = require('events');

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
