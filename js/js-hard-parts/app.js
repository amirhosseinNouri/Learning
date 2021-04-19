function addTwo(num) {
  return num + 2;
}

function addS(word) {
  return word + 's';
}

function map(array, callback) {
  var result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// console.log(map([1, 2, 3], (e) => e * 2));

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// forEach([1, 2, 3], (e) => console.log(e));

function mapWith(array, callback) {
  var result = [];
  forEach(array, (el) => result.push(callback(el)));
  return result;
}

// console.log(mapWith([1, 2, 3], (e) => e * 2));

function reduce(array, callback, initialValue) {
  var result = initialValue;

  for (let i = 0; i < array.length; i++) {
    result += callback(array[i]);
  }

  return result;
}

console.log(reduce([1, 2, 3], (e) => e * 2, 0));
