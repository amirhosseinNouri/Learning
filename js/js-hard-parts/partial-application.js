const multiply = (a, b) => a * b;

function prefillFunction(fn, prefilledValue) {
  const inner = (lineInput) => {
    return fn(lineInput, prefilledValue);
  };
  return inner;
}

const multiplyBy2 = prefillFunction(multiply, 2);
console.log(multiplyBy2(4));
