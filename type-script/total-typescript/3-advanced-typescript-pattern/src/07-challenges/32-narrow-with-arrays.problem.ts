import { Equal, Expect } from '../helpers/type-utils';
import { F } from 'ts-toolbelt';

interface Fruit {
  name: string;
  price: number;
}

export const wrapFruit = <TFruit extends Fruit[]>(fruits: F.Narrow<TFruit>) => {
  const getFruit = <TName extends TFruit[number]['name']>(name: TName) => {
    return fruits.find((fruit) => fruit.name === name) as Extract<
      TFruit[number],
      { name: TName }
    >;
  };

  return {
    getFruit,
  };
};

const fruits = wrapFruit([
  {
    name: 'apple',
    price: 1,
  },
  {
    name: 'banana',
    price: 2,
  },
]);

const banana = fruits.getFruit('banana');
const apple = fruits.getFruit('apple');
// @ts-expect-error
const notAllowed = fruits.getFruit('not-allowed');

type tests = [
  Expect<Equal<typeof apple, { name: 'apple'; price: 1 }>>,
  Expect<Equal<typeof banana, { name: 'banana'; price: 2 }>>,
];
