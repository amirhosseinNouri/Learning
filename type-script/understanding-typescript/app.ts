type addType = (a: number, b: number) => number;

function add(a: number, b: number): number {
  return a + b;
}

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}

// printResult(add(1, 2));

function addAndHandle(a: number, b: number, cb: (a: number) => void) {
  const result = a + b;
  cb(result);
}

addAndHandle(1, 4, (result) => console.log(result));

const addFunction: addType = add;
console.log(addFunction(2, 23));
