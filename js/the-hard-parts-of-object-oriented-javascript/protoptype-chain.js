function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: () => this.score++,
  login: () => console.log('You are logged in.'),
};

const user1 = userCreator('Amir', 12);
// console.log(user1);
user1.login();

function sayHello() {
  console.log('Helo');
}

console.log(sayHello);
sayHello.value = 3;
console.log(sayHello);
console.log(sayHello.value);


