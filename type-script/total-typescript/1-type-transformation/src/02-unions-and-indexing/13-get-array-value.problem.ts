import { Equal, Expect } from '../helpers/type-utils';

const fruits = ['apple', 'banana', 'orange'] as const;

type Fruits = typeof fruits;

type AppleOrBanana = Fruits['0' | '1'];
type Fruit = Fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>,
  Expect<Equal<Fruit, 'apple' | 'banana' | 'orange'>>,
];
