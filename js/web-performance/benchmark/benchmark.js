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
