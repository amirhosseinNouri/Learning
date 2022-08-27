function identity<T>(arg: T): T {
  return arg;
}

const output = identity('some');

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}

interface GenericIdentifyFn<Type> {
  (arg: Type): Type;
}

class GenericNumber<NumberType> {
  zeroValue: NumberType;
  add: (x: NumberType, y: NumberType) => NumberType;

  constructor(
    zeroValue: NumberType,
    add: (x: NumberType, y: NumberType) => NumberType,
  ) {
    this.zeroValue = zeroValue;
    this.add = add;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);

interface Lengthwise {
  length: number;
}

function betterLoggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const x = { a: 1, b: 2, c: 3 };

getProperty(x, 'a');
getProperty(x, 'b');
// getProperty(x, 'd');
