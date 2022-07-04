import { sum, subtract } from './math.js';

expect(subtract(7, 3)).toBe(4);

test('sum adds numbers', () => expect(sum(3, 7)).toBe(10));

test('subtract subtract numbers', () => expect(subtract(7, 4)).toBe(3));

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
