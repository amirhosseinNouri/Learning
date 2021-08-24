type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(e: UnknownEmployee) {
  console.log(e.name);
  if ('privileges' in e) {
    console.log(e.privileges);
  }
  if ('startDate' in e) {
    console.log(e.startDate);
  }
}

const e1: ElevatedEmployee = {
  name: 'Amir',
  privileges: [''],
  startDate: new Date(),
};

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving truck');
  }
  cargo(amount: number) {
    console.log(`Cargo ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v = new Car();
const t = new Truck();

function useVehicle(v: Vehicle) {
  v.drive();
  if ('cargo' in v) {
    v.cargo(200);
  }
}

useVehicle(v);
useVehicle(t);

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(a: Animal) {
  let speed;
  switch (a.type) {
    case 'bird':
      speed = a.flyingSpeed;
      break;
    case 'horse':
      speed = a.runningSpeed;
      break;
    default:
      speed = -1;
  }
  console.log(`Running with ${speed} speed.`);
}

const b1: Bird = { flyingSpeed: 20, type: 'bird' };
moveAnimal(b1);

const paragraph = <HTMLInputElement>document.querySelector('#user-input')!;
paragraph.value = 'Changed';

const inp = document.querySelector('#user-input')! as HTMLInputElement;
inp.value = 'Changed for the second time';

interface ErrorContainer {
  id: string;
  [err: string]: string;
}

const errorBag: ErrorContainer = { id: '1', email: 'Not a valid email.' };

type Combinable = number | string;

// Define function overloads
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add('Amir', 'Hossein');
result.toString();

const fetchedUserData = {
  id: '1',
  name: 'Amir',
  job: { title: 'developer' },
};
console.log(fetchedUserData?.job?.title);

const userInput = '';
const storedData = userInput ?? 'Default';
console.log({ storedData });

const names: Array<string> = ['Amirhossein', 'Ali'];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => res('Done'), 2_000);
});

promise.then((res) => console.log(res.toUpperCase()));

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObject = merge({ name: 'Amir' }, { age: 2 });
console.log(mergedObject.age);
console.log(mergedObject.name);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  const description: string = element.length
    ? `Got ${element.length} elements.`
    : 'Got no value.';
  return [element, description];
}

console.log(countAndPrint('Hello there'));
