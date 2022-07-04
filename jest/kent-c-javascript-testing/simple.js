import { sum, subtract } from './math.js';

expect(sum(3, 7)).toBe(10);

expect(subtract(7, 3)).toBe(4);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
