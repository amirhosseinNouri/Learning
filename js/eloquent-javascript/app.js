const circle = document.querySelector('circle');
circle.setAttribute('fill', 'cyan');

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.fillStyle = 'gray';
context.fillRect(30, 10, 100, 50);
