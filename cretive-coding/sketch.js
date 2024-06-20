const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  pixelPerInch: 300,
  units: 'cm'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'red';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = 'blue';
    context.fill();

    context.lineWidth = width * 0.05;
    context.strokeStyle = 'orange';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
