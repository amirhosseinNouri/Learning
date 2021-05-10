const delay = (timeout) => new Promise((done) => setTimeout(done, timeout));

const functionA = async () => {
  await delay(1000);
  return 'A';
};

const functionB = async () => {
  await delay(2000);
  return 'B';
};

const functionC = async () => {
  await delay(3000);
  return 'C';
};

Promise.race([functionA(), functionB(), functionC()]).then((value) =>
  console.log(value),
);
