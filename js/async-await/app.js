async function onChange() {
  console.log('befor submit');
  await submit();
  console.log('after submit');
}

async function submit() {
  await delay(2000);
  console.log('submit');
}

function delay(timeout) {
  return new Promise((done) => setTimeout(done, timeout));
}

onChange();
