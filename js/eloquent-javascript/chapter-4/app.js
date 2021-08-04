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
// console.log(reverseArray(arr));
// console.log(reverseArrayInPlace(arr));
// console.log(arr === reverseArrayInPlace(arr));
// console.log(arr === reverseArray(arr));

function deepComparison(arg1, arg2) {
  if (
    typeof arg1 === 'object' &&
    arg1 !== null &&
    typeof arg2 === 'object' &&
    arg2 !== null
  ) {
    const prop1 = Object.keys(arg1);
    const prop2 = Object.keys(arg2);

    if (prop1.length !== prop2.length) {
      return false;
    }

    const maxProps = Math.max(prop1.length, prop2.length);

    for (let i = 0; i < maxProps; i++) {
      if (prop1[i] !== prop2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return arg1 === arg2;
  }
}

const a = { value: 1, items: [], id: 1 };
const b = { value: 2, items: [1, 2] };
console.log(deepComparison(a, b));
