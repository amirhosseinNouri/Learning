const { sum, subtract, asyncSum, asyncSubtract } = require('./math.js');

expect(subtract(7, 3)).toBe(4);

test('sum adds numbers', () => expect(sum(3, 7)).toBe(10));

test('subtract subtract numbers', () => expect(subtract(7, 4)).toBe(3));

test('sumAsync adds two number asynchronously', async () => {
  const result = await asyncSum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test('sumSubtract subtracts two number asynchronously', async () => {
  const result = await asyncSubtract(7, 4);
  const expected = 3;
  expect(result).toBe(expected);
});
