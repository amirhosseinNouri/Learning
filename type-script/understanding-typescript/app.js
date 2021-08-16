function add(a, b) {
    return a + b;
}
function printResult(num) {
    console.log("Result: " + num);
}
// printResult(add(1, 2));
var addFunction = add;
console.log(addFunction(2, 23));
