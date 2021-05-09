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

// console.log(map([1, 2, 3], addTwo));

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function mapWith(array, callback) {
  var result = [];
  forEach(array, (element) => result.push(callback(element)));
  return result;
}
// console.log(mapWith([1, 2, 3], addTwo));

function reduce(array, callback, initialValue) {
  var result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }

  return result;
}
const nums = [4, 1, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0)); //-> 8
