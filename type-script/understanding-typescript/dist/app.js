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
