import { expect, it } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

const isString = (e: string | undefined): e is string => e !== undefined;

export const values = ['a', 'b', undefined, 'c', undefined];

const filteredValues = values.filter(isString);

it('Should filter out the undefined values', () => {
  expect(filteredValues).toEqual(['a', 'b', 'c']);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});
