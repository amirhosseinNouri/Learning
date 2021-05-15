function oncify(fn) {
  var counter = 0;

  return function inner(param) {
    if (counter === 0) {
      counter++;
      return fn(param);
    } else {
      return 'Sorry';
    }
  };
}

const multiplyBy2 = (a) => a * 2;

const oncifyMultiplyBy2 = oncify(multiplyBy2);
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
console.log(oncifyMultiplyBy2(5));
