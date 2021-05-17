const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['measure'] });

let iterations = 1e7;

const a = 1;
const b = 2;
const add = (x, y) => x + y;

%NeverOptimizeFunction(add);

performance.mark('start');

while (iterations--) {
  add(a, b);
}



performance.mark('end');

performance.measure('Benchmark', 'start', 'end');
