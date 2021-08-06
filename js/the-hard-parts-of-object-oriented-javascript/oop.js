const makePerson = (name, age) => ({ name, age });

const vicky = makePerson('Vicky', 24);

// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

const personStore = {
  greet: () => console.log('Hello'),
};
// personStore.greet(); // -> Logs 'hello'

function personFromPersonStore(name, age) {
  const newPerson = Object.create(personStore);
  newPerson.name = name;
  newPerson.age = age;
  return newPerson;
}

const sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'
