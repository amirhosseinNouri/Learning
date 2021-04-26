function sayHello() {
  setTimeout(printHello, 1000);
}

function printHello() {
  console.log('Hello');
}

// sayHello();

var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Resolved');
  }, 1000);
});

promise.then(printPromiseContetn);

function printPromiseContetn(content) {
  console.log(content);
}
