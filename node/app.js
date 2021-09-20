const { readFile, writeFile, promises, readFileSync } = require('fs');

readFile('file', 'utf8', (error, content) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(content);
});

writeFile('write.txt', 'Node was here', (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('File written successfully.');
});

promises.readFile('write.txt', 'utf-8').then(console.log).catch(console.error);

console.log('Before reading file sync');
const content = readFileSync('write.txt', 'utf-8');
console.log(content);
console.log('After reading file sync');
