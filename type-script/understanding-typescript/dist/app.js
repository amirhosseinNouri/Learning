"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
// printEmployeeInformation(e1);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving truck');
    };
    Truck.prototype.cargo = function (amount) {
        console.log("Cargo " + amount);
    };
    return Truck;
}());
var v = new Car();
var t = new Truck();
function useVehicle(v) {
    v.drive();
    if ('cargo' in v) {
        v.cargo(200);
    }
}
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
    console.log("Running with " + speed + " speed.");
}
var b1 = { flyingSpeed: 20, type: 'bird' };
// moveAnimal(b1);
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
// const result = add('Amir', 'Hossein');
// result.toString();
var fetchedUserData = {
    id: '1',
    name: 'Amir',
    job: { title: 'developer' },
};
// console.log(fetchedUserData?.job?.title);
var userInput = '';
var storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
// console.log({ storedData });
var names = ['Amirhossein', 'Ali'];
var promise = new Promise(function (res, rej) {
    setTimeout(function () { return res('Done'); }, 2000);
});
promise.then(function (res) { return console.log(res.toUpperCase()); });
function merge(a, b) {
    return Object.assign(a, b);
}
var mergedObject = merge({ name: 'Amir' }, { age: 2 });
function countAndPrint(element) {
    var description = element.length
        ? "Got " + element.length + " elements."
        : 'Got no value.';
    return [element, description];
}
console.log(countAndPrint('Hello there'));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Amir' }, 'name'));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('hello');
textStorage.addItem('amir');
textStorage.removeItem('hello');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
var hybridStorage = new DataStorage();
function createGoalScore(title, description, completeUntil) {
    var obj = {};
    obj.title = title;
    obj.description = description;
    obj.completeUntil = completeUntil;
    return obj;
}
