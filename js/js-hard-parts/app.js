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

forEach([1, 2, 3], (e) => console.log(e));
