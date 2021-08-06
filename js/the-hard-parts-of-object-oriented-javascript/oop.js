const makePerson = (name, age) => ({ name, age });

const vicky = makePerson('Vicky', 24);

// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

const personStore = {
  greet: () => console.log('Hello'),
};
personStore.greet(); // -> Logs 'hello'
