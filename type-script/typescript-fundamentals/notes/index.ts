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
