function add(a, b) {
    return a + b;
}
function printResult(num) {
    console.log("Result: " + num);
}
// printResult(add(1, 2));
function addAndHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
addAndHandle(1, 4, function (result) { return console.log(result); });
var addFunction = add;
console.log(addFunction(2, 23));
