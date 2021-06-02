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
