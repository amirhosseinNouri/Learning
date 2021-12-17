const { performance } = require('perf_hooks');

// SETUP 🏁

let iterations = 1e5;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const test = () => {
  const add = (point) => point.x + point.y;

  const point = new Point(2, 3);
  add(point);
};
// 🔚 SETUP

performance.mark('start');

// EXERCISE 💪

while (iterations--) {
  test();
}

// 🔚 EXERCISE

performance.mark('end');

performance.measure('My Special Benchmark', 'start', 'end');

const [measure] = performance.getEntriesByName('My Special Benchmark');
console.log(measure);
