"use strict";
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log(this.name);
    };
    return Department;
}());
var tech = new Department('Tech');
console.log(tech);
tech.printName();
