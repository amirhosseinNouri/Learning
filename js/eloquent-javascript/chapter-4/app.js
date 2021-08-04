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
console.log(sum(range(1, 10)));
