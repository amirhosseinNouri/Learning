const sum = (a, b) => a + b;

const weirdSum = (a) => sum(a, b);

console.log(weirdSum(1)(2))