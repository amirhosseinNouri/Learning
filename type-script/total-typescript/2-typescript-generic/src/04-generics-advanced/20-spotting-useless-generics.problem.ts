import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

const returnBothOfWhatIPassIn = <T extends { a: unknown; b: unknown }>(
  params: T,
): [T['a'], T['b']] => {
  return [params.a, params.b];
};

it('Should return a tuple of the properties a and b', () => {
  const result = returnBothOfWhatIPassIn({
    a: 'a',
    b: 1,
  });

  expect(result).toEqual(['a', 1]);

  type test1 = Expect<Equal<typeof result, [string, number]>>;
});
