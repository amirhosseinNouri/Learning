'use strict';
var _a;
function printEmployeeInformation(e) {
  console.log(e.name);
  if ('privileges' in e) {
    console.log(e.privileges);
  }
  if ('startDate' in e) {
    console.log(e.startDate);
  }
}
var e1 = {
  name: 'Amir',
  privileges: [''],
  startDate: new Date(),
};
printEmployeeInformation(e1);
var Car = /** @class */ (function () {
  function Car() {}
  Car.prototype.drive = function () {
    console.log('Driving');
  };
  return Car;
})();
var Truck = /** @class */ (function () {
  function Truck() {}
  Truck.prototype.drive = function () {
    console.log('Driving truck');
  };
  Truck.prototype.cargo = function (amount) {
    console.log('Cargo ' + amount);
  };
  return Truck;
})();
var v = new Car();
var t = new Truck();
function useVehicle(v) {
  v.drive();
  if ('cargo' in v) {
    v.cargo(200);
  }
}
useVehicle(v);
useVehicle(t);
function moveAnimal(a) {
  var speed;
  switch (a.type) {
    case 'bird':
      speed = a.flyingSpeed;
      break;
    case 'horse':
      speed = a.runningSpeed;
      break;
    default:
      speed = -1;
  }
  console.log('Running with ' + speed + ' speed.');
}
var b1 = { flyingSpeed: 20, type: 'bird' };
moveAnimal(b1);
var paragraph = document.querySelector('#user-input');
paragraph.value = 'Changed';
var inp = document.querySelector('#user-input');
inp.value = 'Changed for the second time';
var errorBag = { id: '1', email: 'Not a valid email.' };
function add(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
var result = add('Amir', 'Hossein');
result.toString();
var fetchedUserData = {
  id: '1',
  name: 'Amir',
  job: { title: 'developer' },
};
console.log(
  (_a =
    fetchedUserData === null || fetchedUserData === void 0
      ? void 0
      : fetchedUserData.job) === null || _a === void 0
    ? void 0
    : _a.title,
);
