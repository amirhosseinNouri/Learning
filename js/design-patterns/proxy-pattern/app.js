const person = {
  name: 'amirhossein',
  age: 22,
};

const proxy = new Proxy(person, {
  set: (obj, prop, value) => {
    console.log('Setter');
    obj[prop] = value;
  },

  get: (obj, prop) => {
    console.log('Getter');
    console.log(`The value of ${prop} is ${obj[prop]}`);
  },
});

proxy.name;
proxy.age = 24;
proxy.age;
