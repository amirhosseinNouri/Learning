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
// delay().then(sayHello);

var secondPromise = new Promise((resolve, reject) => {
  resolve('Second!');
});

var firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
});

// firstPromise.then((value) => console.log('Challenge 6', value));

const fakePeople = [
  { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
  { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
  { name: 'Harold', hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: 'index out of range' });
    }
  });
};

function getAllData() {
  const promises = [fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)];
  return Promise.all(promises);
}

getAllData()
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
