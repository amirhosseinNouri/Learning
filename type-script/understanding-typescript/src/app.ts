interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

const user: Person = {
  name: 'Amir',
  age: 21,
  greet: (phrase) => console.log(phrase),
};

class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log('Greet');
  }
}

const e1 = new Employee('Amir', 20);



interface AddFunctionInterface {
  (a: number, b: number): number;
}

type AddFunctionType = (a: number, b: number) => number;

const addUsingInterface: AddFunctionInterface = (
  a: number,
  b: number,
): number => {
  return a + b;
};

const addUsingType: AddFunctionType = (a: number, b: number): number => {
  return a + b;
};
