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

const triangle = document.querySelector('.triangle').getContext('2d');
triangle.beginPath();
triangle.moveTo(50, 10);
triangle.lineTo(10, 70);
triangle.lineTo(90, 70);
triangle.fill();

const curve = document.querySelector('.curve').getContext('2d');
curve.beginPath();
curve.moveTo(10, 90);
curve.quadraticCurveTo(60, 10, 90, 90);
curve.lineTo(60, 10);
curve.closePath();
curve.stroke();

const bezier = document.querySelector('.bezier');

bezier.beginPath();
bezier.moveTo(10, 90);
bezier.bezierCurveTo(10, 10, 90, 10, 50, 90);
bezier.lineTo(10, 10);
bezier.lineTo(90, 10);
bezier.closePath();
bezier.stroke();
