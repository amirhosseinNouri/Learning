import { Equal, Expect } from '../helpers/type-utils';

type Fruit =
  | {
      name: 'apple';
      color: 'red';
    }
  | {
      name: 'banana';
      color: 'yellow';
    }
  | {
      name: 'orange';
      color: 'orange';
    };

type Names = Fruit['name'];

type Colors = Fruit['color'];

type P = Extract<Fruit, { name: 'apple' }>;

type TransformedFruit = {
  [F in Fruit as F['name']]: `${F['name']}:${F['color']}`;
}[Fruit['name']];

type tests = [
  Expect<
    Equal<TransformedFruit, 'apple:red' | 'banana:yellow' | 'orange:orange'>
  >,
];
