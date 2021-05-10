const multiplyBy2 = (x) => x * 2;
const add3 = (x) => x + 3;
const divideBy5 = (x) => x / 5;

const runFunction = (value, func) => func(value);
const output = [multiplyBy2, add3, divideBy5].reduce(runFunction, 11);
console.log(output);
