"use strict";
var user = {
    name: 'Amir',
    age: 21,
    greet: function (phrase) { return console.log(phrase); },
};
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        console.log('Greet');
    };
    return Employee;
}());
var e1 = new Employee('Amir', 20);
var addUsingInterface = function (a, b) {
    return a + b;
};
var addUsingType = function (a, b) {
    return a + b;
};
