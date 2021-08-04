function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

function sum(arr) {
  let sum = 0;
  for (num of arr) {
    sum += num;
  }
  return sum;
}
// console.log(sum(range(1, 10)));

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

function reverseArrayInPlace(arr) {
  return arr.reverse();
}

const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
console.log(reverseArrayInPlace(arr));
console.log(arr === reverseArrayInPlace(arr));
console.log(arr === reverseArray(arr));
