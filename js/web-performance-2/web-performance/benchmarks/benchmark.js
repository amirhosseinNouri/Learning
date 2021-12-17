const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 1e5;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const square = (x) => x * x;
const sumOfSquares = (a, b) => square(a) + square(b);

// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  sumOfSquares(iterations, iterations + 1);
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [measure] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);
