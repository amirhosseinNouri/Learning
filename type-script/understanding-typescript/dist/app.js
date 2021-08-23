"use strict";
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
useVehicle(v);
useVehicle(t);
