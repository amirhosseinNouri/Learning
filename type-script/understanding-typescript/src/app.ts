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

// printEmployeeInformation(e1);

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

// useVehicle(v);
// useVehicle(t);

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
// moveAnimal(b1);

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

// const result = add('Amir', 'Hossein');
// result.toString();

const fetchedUserData = {
  id: '1',
  name: 'Amir',
  job: { title: 'developer' },
};
// console.log(fetchedUserData?.job?.title);

const userInput = '';
const storedData = userInput ?? 'Default';
// console.log({ storedData });

const names: Array<string> = ['Amirhossein', 'Ali'];

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => res('Done'), 2_000);
});

promise.then((res) => console.log(res.toUpperCase()));

function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const mergedObject = merge({ name: 'Amir' }, { age: 2 });
// console.log(mergedObject.age);
// console.log(mergedObject.name);

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

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'Amir' }, 'name'));

class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems(): Array<T> {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('hello');
textStorage.addItem('amir');
textStorage.removeItem('hello');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
const hybridStorage = new DataStorage<string | number>();
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: 'Amir' });
// objectStorage.addItem({ age: 23 });
// objectStorage.removeItem({ age: 23 });
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createGoalScore(
  title: string,
  description: string,
  completeUntil: Date,
): CourseGoal {
  const obj: Partial<CourseGoal> = {};
  obj.title = title;
  obj.description = description;
  obj.completeUntil = completeUntil;

  return obj as CourseGoal;
}

const myNames: Readonly<string[]> = ['Amir', 'Amirhossein', 'Ali'];
// myNames.push('new name');
// myNames.pop();
