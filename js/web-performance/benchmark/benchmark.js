const { performance, PerformanceObserver } = require('perf_hooks');
class Point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}
const test = () => {
  const add = point => point.x + point.y;
  

  const point = new Point(10 , 20)
  add(point)
}

const square = (x) => x*x;

const sumOfSquare = (a,b) => square(a) + square(b);

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['measure'] });

function measure(name, fn, iterations , ...args) {
  performance.mark('start');
  while (iterations--) {
    fn(...args);
  }
  performance.mark('end');
  performance.measure(name, 'start', 'end');
}

const iterations = 1e5;
// class Point {
//   constructor(x, y, z) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//   }
// }

const undefineProperty = (property) => {
  const point = new Point(1, 2, 3);
  point[property] = undefined;
};

const deleteProperty = (property) => {
  const point = new Point(1, 2, 3);
  delete point[property];
};

// measure('test' , test ,  iterations)

// measure('delete x', () => deleteProperty('x'), iterations);
// measure('delete y', () => deleteProperty('y'), iterations);
// measure('delete z', () => deleteProperty('z'), iterations);

// measure('undefine x', () => undefineProperty('x'), iterations);
// measure('delete y', () => deleteProperty('y'), iterations);
// measure('delete z', () => deleteProperty('z'), iterations);


measure('sumOfSquare' , sumOfSquare ,iterations , iterations , iterations + 1)