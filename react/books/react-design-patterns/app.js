const add = (a, b) => a + b;

const log = (func) => (...args) => {
  console.log(...args);
  return func(...args);
};

const logAdd = log(add);
logAdd(2, 3);

const delay = (timeout) =>
  new Promise((callback) => setTimeout(callback, timeout));

const print = (a, b) => {
  console.log(a);
  console.log(b);
};

const delayPrint = (func) => async (...args) => {
  await delay(2000);
  func(...args);
};

const delayPrintFunction = delayPrint(print);
delayPrintFunction(5, 6);
