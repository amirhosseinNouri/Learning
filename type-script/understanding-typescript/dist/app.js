"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
const e1 = {
    name: 'Amir',
    privileges: [''],
    startDate: new Date(),
};
// printEmployeeInformation(e1);
class Car {
    drive() {
        console.log('Driving');
    }
}
class Truck {
    drive() {
        console.log('Driving truck');
    }
    cargo(amount) {
        console.log(`Cargo ${amount}`);
    }
}
const v = new Car();
const t = new Truck();
function useVehicle(v) {
    v.drive();
    if ('cargo' in v) {
        v.cargo(200);
    }
}
function moveAnimal(a) {
    let speed;
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
    console.log(`Running with ${speed} speed.`);
}
const b1 = { flyingSpeed: 20, type: 'bird' };
// moveAnimal(b1);
const paragraph = document.querySelector('#user-input');
paragraph.value = 'Changed';
const inp = document.querySelector('#user-input');
inp.value = 'Changed for the second time';
const errorBag = { id: '1', email: 'Not a valid email.' };
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// const result = add('Amir', 'Hossein');
// result.toString();
const fetchedUserData = {
    id: '1',
    name: 'Amir',
    job: { title: 'developer' },
};
// console.log(fetchedUserData?.job?.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'Default';
// console.log({ storedData });
const names = ['Amirhossein', 'Ali'];
const promise = new Promise((res, rej) => {
    setTimeout(() => res('Done'), 2000);
});
promise.then((res) => console.log(res.toUpperCase()));
function merge(a, b) {
    return Object.assign(a, b);
}
const mergedObject = merge({ name: 'Amir' }, { age: 2 });
function countAndPrint(element) {
    const description = element.length
        ? `Got ${element.length} elements.`
        : 'Got no value.';
    return [element, description];
}
console.log(countAndPrint('Hello there'));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'Amir' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('hello');
textStorage.addItem('amir');
textStorage.removeItem('hello');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
const hybridStorage = new DataStorage();
function createGoalScore(title, description, completeUntil) {
    const obj = {};
    obj.title = title;
    obj.description = description;
    obj.completeUntil = completeUntil;
    return obj;
}
const myNames = ['Amir', 'Amirhossein', 'Ali'];
// myNames.push('new name');
// myNames.pop();
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creating new person');
    }
};
Person = __decorate([
    WithTemplate('<h1>My person object</h1>', 'app'),
    Logger('Log')
], Person);
const p = new Person();
console.log(p);
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        console.log('Rendering template');
        const hookElement = document.querySelector(`#${hookId}`);
        const p = new constructor();
        console.log(p.name);
        document.querySelector('h2').textContent = p.name;
        if (hookElement) {
            hookElement.innerHTML = template;
        }
    };
}
class Product {
    constructor(title, price) {
        this.title = title;
        this._price = price;
    }
    // @Log2
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error('Invalid price');
        }
    }
    // @Log3
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
function Log(target, propertyName) {
    console.log('Property Decorator');
    console.log(target);
    console.log(propertyName);
}
function Log2(target, name, propertyDescriptor) {
    console.log('Accessor decorator');
    console.log(target);
    console.log(name);
    console.log(propertyDescriptor);
}
function Log3(target, name, propertyDescriptor) {
    console.log('method decorator');
    console.log({ target, name, propertyDescriptor });
}
