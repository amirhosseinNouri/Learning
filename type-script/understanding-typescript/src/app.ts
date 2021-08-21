const firstName: string = 'Amir';
console.log(firstName);

const button = document.querySelector('button');

function handleClick(message: string) {
  console.log(message);
}

button?.addEventListener('click', handleClick.bind(null, 'Message'));
