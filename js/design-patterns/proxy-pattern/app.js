const person = {
  name: 'amirhossein',
  age: 22,
};

const proxy = new Proxy(person, {
  set: (obj, prop, value) => {
    console.log('Setter');
    Reflect.set(obj, prop);
  },

  get: (obj, prop) => {
    console.log('Getter');
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
});

proxy.name;
proxy.age = 24;
proxy.age;
