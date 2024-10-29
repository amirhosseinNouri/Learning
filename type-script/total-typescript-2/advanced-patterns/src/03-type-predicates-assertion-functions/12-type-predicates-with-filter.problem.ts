import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

export const values = ['a', 'b', undefined, 'c', undefined];

const onlyStrings = (value: unknown): value is string =>
  typeof value === 'string';

const filteredValues = values.filter(onlyStrings);

it('Should filter out the undefined values', () => {
  expect(filteredValues).toEqual(['a', 'b', 'c']);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});
