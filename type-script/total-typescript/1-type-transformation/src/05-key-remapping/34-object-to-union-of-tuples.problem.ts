import { Equal, Expect } from '../helpers/type-utils';

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type Example = {};

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type T = ValuesAsUnionOfTuples[keyof ValuesAsUnionOfTuples];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ['email', string] | ['firstName', string] | ['lastName', string]
    >
  >,
];
