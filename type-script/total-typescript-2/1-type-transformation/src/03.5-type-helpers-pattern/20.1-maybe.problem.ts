import { Nullable } from 'vitest';
import { Equal, Expect } from '../helpers/type-utils';

type Maybe<T> = Nullable<T>;

type tests = [
  Expect<Equal<Maybe<string>, string | null | undefined>>,
  Expect<Equal<Maybe<number>, number | null | undefined>>,
  Expect<Equal<Maybe<boolean>, boolean | null | undefined>>,
  Expect<Equal<Maybe<null>, null | undefined>>,
];
