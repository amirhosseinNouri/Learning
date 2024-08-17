import { Equal, Expect } from '../helpers/type-utils';

export const fakeDataDefaults = {
  String: 'Default string',
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: 'id',
};

type FakeData = typeof fakeDataDefaults;

export type StringType = FakeData['String'];
export type IntType = FakeData['Int'];
export type FloatType = FakeData['Float'];
export type BooleanType = FakeData['Boolean'];
export type IDType = FakeData['ID'];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
