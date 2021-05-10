const delay = (timeout) => new Promise((done) => setTimeout(done, timeout));

const functionA = async () => {
  await delay(1000);
  console.log('A is done');
};

const functionB = async () => {
  await delay(2000);
  console.log('B is done');
};

const functionC = async () => {
  await delay(3000);
  console.log('C is done');
};

// Promise.all([functionA(), functionB(), functionC()]).then(() =>
//   console.log('All resolved'),
// );

// [(functionA(), functionB(), functionC())]
//   .reduce((acc, curr) => acc.then(curr), Promise.resolve())
//   .then(console.log('All resolved'));

const applyAsync = (acc, curr) => acc.then(curr);

[(functionA(), functionB(), functionC())]
  .reduce(applyAsync, Promise.resolve())
  .then(console.log('All resolved'));
