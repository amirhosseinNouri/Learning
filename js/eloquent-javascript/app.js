const circle = document.querySelector('circle');
circle.setAttribute('fill', 'cyan');

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
// context.fillStyle = 'green';
context.strokeStyle = 'red';
context.strokeRect(5, 5, 50, 50);
context.lineWidth = 5;
context.strokeRect(135, 5, 50, 50);
// context.fillRect(30, 10, 100, 50);

const pathCanvas = document.querySelector('.path').getContext('2d');
pathCanvas.beginPath();
for (let y = 10; y < 100; y += 10) {
  pathCanvas.moveTo(10, y);
  pathCanvas.lineTo(90, y);
}

pathCanvas.stroke();
