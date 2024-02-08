import { Equal, Expect } from '../helpers/type-utils';

type Fruit = 'apple' | 'banana' | 'orange';

type AppleOrBanana = Fruit extends infer F
  ? F extends 'apple' | 'banana'
    ? F
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, 'apple' | 'banana'>>];
