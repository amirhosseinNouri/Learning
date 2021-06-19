const dog: any = {
  name: 'Fluffy',
  sayHello: () => 'hello =/',
};

dog.sayHello();

const anotherDog: unknown = {
  hello: () => console.log('hello'),
};

// anotherDog.hello();

const myAny: any = true;

myAny.trim().reverse().slpit(',');

const myNumbericAny: number = myAny;

const sum = myNumbericAny + 3;

// Error in runtime =(

let myUnknown: unknown = true;
myUnknown.trim(); // Property 'trim' does not exist on type 'unknown'.ts(2339)
let myAnyNumeric: number = myUnknown; // Type 'unknown' is not assignable to type 'number'.ts(2322)
if (typeof myUnknown === 'string') myUnknown.trim();
if (typeof myUnknown === 'number') {
  let myAnyNumeric: number = myUnknown;
  const sum = myAnyNumeric + 3;
}

function isNumberArray(value: unknown): boolean {
  return (
    Array.isArray(value) &&
    value.every((element) => typeof element === 'number')
  );
}

const value: unknown = 'Hello world';
const someString: string = value as string;
