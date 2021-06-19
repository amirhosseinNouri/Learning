export type Dict<T> = {
  [k: string]: T | undefined;
};

// Array.prototype.map, but for Dict
export function mapDict<T, S>(
  dict: Dict<T>,
  fn: (arg: T, index: number) => S,
): Dict<S> {
  const out: Dict<S> = {};
  Object.keys(dict).forEach((dkey, idx) => {
    const currentItem = dict[dkey];
    if (typeof currentItem !== 'undefined') {
      out[dkey] = fn(currentItem, idx);
    }
  });

  return out;
}

mapDict(
  {
    a: 'a',
    b: 'b',
  },
  (str) => [str],
);

// Array.prototype.reduce, but for Dict
export function reduceDict() {}
