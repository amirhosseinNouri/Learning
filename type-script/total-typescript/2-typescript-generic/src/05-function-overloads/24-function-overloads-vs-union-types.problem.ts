import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

type RunFunction = () => unknown;

type WithRun = { run: RunFunction };

function runGenerator(generator: WithRun): string;
function runGenerator(generator: RunFunction): string;

function runGenerator(generator: RunFunction | WithRun) {
  if (typeof generator === 'function') {
    return generator();
  }
  return generator.run();
}

it('Should accept an object where the generator is a function', () => {
  const result = runGenerator({
    run: () => 'hello',
  });

  expect(result).toBe('hello');

  type test1 = Expect<Equal<typeof result, string>>;
});

it('Should accept an object where the generator is a function', () => {
  const result = runGenerator(() => 'hello');

  expect(result).toBe('hello');

  type test1 = Expect<Equal<typeof result, string>>;
});
