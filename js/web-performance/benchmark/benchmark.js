const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['measure'] });

function measure(name, fn, iterations) {
  performance.mark('start');
  while (iterations--) {
    fn();
  }
  performance.mark('end');
  performance.measure(name, 'start', 'end');
}

const iterations = 1e5;
class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const undefineProperty = (property) => {
  const point = new Point(1, 2, 3);
  point[property] = undefined;
};

const deleteProperty = (property) => {
  const point = new Point(1, 2, 3);
  delete point[property];
};

measure('delete x', () => deleteProperty('x'), iterations);
measure('delete y', () => deleteProperty('y'), iterations);
measure('delete z', () => deleteProperty('z'), iterations);

measure('undefine x', () => undefineProperty('x'), iterations);
measure('delete y', () => deleteProperty('y'), iterations);
measure('delete z', () => deleteProperty('z'), iterations);
