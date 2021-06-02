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
