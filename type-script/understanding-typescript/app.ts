// const add = (n1: number, n2: number, logResult: boolean, phrase: string) => {
//   const result: number = n1 + n2;
//   if (logResult) {
//     console.log(`${phrase} ${result}`);
//   }
//   return n1 + n2;
// };

// const a = 2;
// const b = 3.2;

// add(a, b, true, 'The result is:');

enum Role {
  ADMIN,
  USER,
  MANAGER,
}

const person = {
  role: Role.ADMIN,
};

console.log(person.role);
