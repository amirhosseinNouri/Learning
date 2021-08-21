"use strict";
var firstName = 'Amir';
console.log(firstName);
var button = document.querySelector('button');
function handleClick(message) {
    console.log(message);
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick.bind(null, 'Message'));
