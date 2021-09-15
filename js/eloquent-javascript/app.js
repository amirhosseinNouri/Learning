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

const bezier = document.querySelector('.bezier').getContext('2d');

bezier.beginPath();
bezier.moveTo(10, 90);
bezier.bezierCurveTo(10, 10, 90, 10, 50, 90);
bezier.lineTo(10, 10);
bezier.lineTo(90, 10);
bezier.closePath();
bezier.stroke();

const arc = document.querySelector('.arc').getContext('2d');
arc.beginPath();
arc.arc(50, 50, 40, 0, 0.5 * Math.PI);
arc.closePath();
arc.fill();

const results = [
  { name: 'Satisfied', count: 1043, color: 'lightBlue' },
  { name: 'Neutral', count: 563, color: 'lightGreen' },
  { name: 'Unsatisfied', count: 510, color: 'pink' },
  { name: 'No Comment', count: 175, color: 'silver' },
];

//  (count / total) * 2π

const total = results.reduce((sum, { count }) => sum + count, 0);

const chart = document.querySelector('.chart').getContext('2d');

let currentAngle = 0;

for (let result of results) {
  const sliceAngle = (result.count / total) * 2 * Math.PI;
  chart.beginPath();
  chart.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  chart.lineTo(100, 100);
  chart.fillStyle = result.color;
  chart.fill();
}
