function sayHello() {
  setTimeout(printHello, 1000);
}

function printHello() {
  console.log('Hello');
}

// sayHello();

// var promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve('Resolved');
//   }, 1000);
// });

// promise.then(printPromiseContetn);

function printPromiseContetn(content) {
  console.log(content);
}

// var promise = new Promise(function (resolve, reject) {
//   reject('Rejected');
// });

// promise.catch(printPromiseContetn);

var promise = new Promise(function (resolve, reject) {
  resolve('Promise has been resolved');
});

// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}
delay().then(sayHello);
