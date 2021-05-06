const flow = createFlow();
const futureData = flow.next();
console.log(futureData);
futureData.then(whenDataIsReady);

function* createFlow() {
  const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
}

function whenDataIsReady(value) {
  promise.next(value);
}
