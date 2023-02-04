const EventEmitter = require('events')

const emitter = new EventEmitter();


emitter.on("newSale" , () => {
    console.log('There was a new sale')
})

emitter.on("newSale" , () => {
    console.log('Customer name: Amirhossein')
})

emitter.emit("newSale");