import dotenv from 'dotenv';
dotenv.config();

interface Options {
  filterNull?: boolean;
  filterUndefined?: boolean;
  filterEmptyString?: boolean;
  filterZero?: boolean;
}

const filter = <TArray extends unknown[]>(
  array: TArray,
  {
    filterEmptyString = false,
    filterNull = true,
    filterUndefined = true,
    filterZero = false,
  }: Options = {},
): TArray => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    // if (element !== null && element !== undefined) {
    //   result.push(element);
    // }

    if (
      (filterNull && element === null) ||
      (filterUndefined && element === undefined) ||
      (filterEmptyString && element === '') ||
      (filterZero && element === 0)
    ) {
      continue;
    }

    result.push(element);
  }

  return result as TArray;
};

console.log('Default: ', filter([0, 1, undefined, 2, null, 3, 'four', '']));

console.log(
  'Dot not filter null: ',
  filter([0, 1, undefined, 2, null, 3, 'four', ''], {
    filterNull: false,
  }),
);

console.log(
  'Do not filter undefined: ',
  filter([0, 1, undefined, 2, null, 3, 'four', ''], { filterUndefined: false }),
);

console.log(
  'Filter zeros: ',
  filter([0, 1, undefined, 2, null, 3, 'four', ''], { filterZero: true }),
);

console.log(
  'Filter empty strings: ',
  filter([0, 1, undefined, 2, null, 3, 'four', ''], {
    filterEmptyString: true,
  }),
);
