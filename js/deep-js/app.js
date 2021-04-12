const formatTrend = (trendRate) => {
  let direction = trendRate < 0 || Object.is(trendRate, -0) ? '⌄' : '^';
  return `${direction} ${Math.abs(trendRate)}`;
};

console.log(formatTrend(-3));
console.log(formatTrend(3));
console.log(formatTrend(-0));
console.log(formatTrend(0));
