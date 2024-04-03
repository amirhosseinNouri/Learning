import { Equal, Expect } from '../helpers/type-utils';

export function makeEventHandlers<TEvent extends string>(obj: {
  [K in TEvent]: (event: K) => void;
}) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, 'click'>>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, 'focus'>>;
  },
});
