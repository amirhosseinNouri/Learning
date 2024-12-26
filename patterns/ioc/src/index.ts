import dotenv from 'dotenv';
dotenv.config();

const filter = <TArray extends unknown[]>(array: TArray): TArray => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element !== null && element !== undefined) {
      result.push(element);
    }
  }

  return result as TArray;
};

console.log(filter([0, 1, 2, 3, null, undefined, 4, 5, 6, '']));
