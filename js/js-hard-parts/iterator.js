function sumFunc(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  var i = 0;
  return function iterator() {
    if (i < arr.length) {
      return arr[i++];
    }
  };
}

// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

function nextIterator(arr) {
  var i = 0;
  return {
    next: function () {
      if (i < arr.length) {
        return arr[i++];
      }
    },
  };
}

// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

function sumArray(arr) {
  var sum = 0;
  var iterator = nextIterator(arr);
  var next = iterator.next();
  while (next) {
    sum += next;
    next = iterator.next();
  }

  return sum;
}

// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

function setIterator(arr) {
  return nextIterator(Array.from(arr));
}

const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'
