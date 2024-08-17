import { Equal, Expect } from '../helpers/type-utils';

interface FruitMap {
  apple: 'red';
  banana: 'yellow';
  orange: 'orange';
}

type TransformedFruitKeys = {
  [K in keyof FruitMap as `${K}:${FruitMap[K]}`]: K;
};

type TransformedFruit = keyof TransformedFruitKeys;

type tests = [
  Expect<
    Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
  >,
];
