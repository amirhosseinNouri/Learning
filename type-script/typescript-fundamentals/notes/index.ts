let a = 2;
// a = "Hello";   // Wrong
const b = 'hello';
function foo(args: 'hellooooo') {}

// foo(b); // wrong

let z: number; // without initializer
z = 2;
// z = "hello"; // wrong

// let aa  = [];
// aa.push(1);
// aa.push('Some string')

let aa: number[] = [];
aa.push(2);
// aa.push('ss');

let t: [number, string, string, number] = [123, 'str', 'str', 13243];

t = [1, ' ', ' ', 2];

let cc: { name: string; age?: number };

cc = {
  name: 'Amirhossein',
  //   x : '' // extra
};

interface Person {
  name: string;
  age?: number;
}

let ee: Person = { name: 'Amirhossein' };

interface HasPhoneNumber {
  name: string;
  phone?: string;
}

interface HasEmail {
  name: string;
  email?: string;
}

let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? {
        name: 'Amirhossein',
        phone: '09195850787',
      }
    : {
        name: 'Amirhossein',
        email: 'Amirhossein@gmail.com',
      };

contactInfo.name;

let otherContactInfo: HasEmail & HasPhoneNumber = {
  name: 'Amirhossein',
  email: '@',
  phone: 'XXXX',
};

otherContactInfo.phone;
otherContactInfo.name;
otherContactInfo.email;

/* *************** Functions *************** */

function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: 'This is the body',
  };
}

const sendTextMessage = (to: HasEmail): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: 'This is the body',
  };
};

function contactPeople(method: 'email', ...people: HasEmail[]): void;
function contactPeople(method: 'phone', ...people: HasPhoneNumber[]): void;

function contactPeople(
  method: 'email' | 'phone',
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (method === 'email') {
    (people as HasEmail[]).forEach(sendEmail);
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}

contactPeople('email', { name: 'amir', email: 'amir@gmail' });
contactPeople('phone', { name: 'amir', phone: 'xxxx' });
// contactPeople('email', { name: 'amir', phone: 'xxxx' });

/* *************** interface and alias *************** */

type StringOrNumber = string | number;
let x: StringOrNumber = 2;
x = 'some string';
type HasName = { name: string };

export interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}

interface ContactMessanger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}

type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string,
) => void;

interface ContractConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber;
}

const emailer: ContactMessanger1 = (_contact, _message) => {
  /* */
};

interface PhoneNumberDict {
  [numberName: string]: undefined | { areaCode: number; num: number };
}

// const d: PhoneNumberDict = {};

// if (d.abc) {
//   d.abc; // no undefined here
// }

const PhoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 2222 },
  home: { areaCode: 232, num: 432434343 },
  iphone: { areaCode: 111, num: 323223 }, // optional
};

interface PhoneNumberDict {
  home: {
    areaCode: number;
    num: number;
  };
  office: {
    areaCode: number;
    num: number;
  };
}

PhoneDict.home; // present
PhoneDict.office; // present
PhoneDict.mobie; // maybe present

type NumVal = 1 | 2 | 3 | NumArr;
interface NumArr extends Array<NumVal> {}
const xxxx: NumVal = [1, 2, 3, 1, 1, [2, 3]];

/* ******** Classes ****** */

export class Contact implements HasEmail {
  email: string;
  name: string;

  constructor(name: string, email: string) {
    this.email = email;
    this.name = name;
  }
}

class ParamPropContact implements HasEmail {
  constructor(public name: string, protected email: string = 'No Email') {}
}

const xx = new ParamPropContact('a', 'b');
// xx.

class OtherContact implements HasEmail, HasPhoneNumber {
  protected age: number = 0;
  // private password!: string ;
  private passwordVal: string | undefined;
  readonly city: string = 'Tehran';
  constructor(
    public name: string,
    public email: string,
    public phone: number,
  ) {}

  get password(): string {
    if (!this.passwordVal) {
      this.passwordVal = '123';
    }
    return this.passwordVal;
  }

  // async init (){
  //   this.password = '12234';
  // }
}

abstract class AbstractContact implements HasEmail, HasPhoneNumber {
  constructor(public name: string, public email: string) {}

  abstract sendEmail(): void;
}

class ConcreteContact extends AbstractContact {
  constructor(public phone: number, name: string, email: string) {
    super(name, email);
  }

  sendEmail() {
    console.log('sending an email');
  }
}

interface WrappedValue<X> {
  value: X;
}

let val: WrappedValue<string[]> = { value: [] };

interface FilterFunction<T = any> {
  (value: T): boolean;
}

const stringsFilter: FilterFunction<string> = (value) =>
  typeof value === 'string';

const truthyFilter: FilterFunction = (val) => val;

truthyFilter(0);
truthyFilter(1);
truthyFilter('');
truthyFilter(['dsa']);

function resolveOrTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timeoutId = setTimeout(() => reject('Time up'), timeout);

    promise.then((val) => {
      clearTimeout(timeoutId);

      resolve(val);
    });
  });
}

resolveOrTimeout(fetch(''), 2000);
