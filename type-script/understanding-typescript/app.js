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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["MANAGER"] = 2] = "MANAGER";
})(Role || (Role = {}));
var person = {
    role: Role.ADMIN
};
console.log(person.role);
