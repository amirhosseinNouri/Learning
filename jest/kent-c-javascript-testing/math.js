const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const asyncSum = (a, b) => Promise.resolve(a - b);
const asyncSubtract = (a, b) => Promise.resolve(a - b);

module.exports = { sum, subtract, asyncSum, asyncSubtract };
