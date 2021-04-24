const add = (a, b) => a + b;

const log = (func) => (...args) => {
  console.log(...args);
  return func(...args);
};

const logAdd = log(add);
logAdd(2, 3);
