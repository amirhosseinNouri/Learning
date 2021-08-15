var add = function (n1, n2, logResult, phrase) {
    var result = n1 + n2;
    if (logResult) {
        console.log(phrase + " " + result);
    }
    return n1 + n2;
};
var a = 2;
var b = 3.2;
add(a, b, true, 'The result is:');
