const makePerson = (name, age) => ({ name, age });

const vicky = makePerson('Vicky', 24);

// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

const personStore = {
  greet: () => console.log('Hello'),
  introduce: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
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
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}

PersonConstructor.prototype.greet = function () {
  console.log('Hi');
};

PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`);
};

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

function personFromConstructor(name, age) {
  const newPerson = new PersonConstructor(name, age);
  return newPerson;
}

const mike = personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello');
  }
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
// george.greet(); // -> Logs 'hello'

class DeveloperClass extends PersonClass {
  introduce() {
    console.log(`Hi, my name is ${this.name}`);
  }
}
// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'
