class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }
  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }
  times(factor) {
    return new Vec(this.x * factor, this.y * factor);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

class GraphNode {
  constructor() {
    this.pos = new Vec(Math.random() * 1000, Math.random() * 1000);
    this.edges = [];
  }

  connect(other) {
    this.edges.push(other);
    other.edges.push(this);
  }

  hasEdge(other) {
    return this.edges.includes(other);
  }
}

function treeGraph(depth, branches) {
  let graph = [new GraphNode()];
  if (depth > 1) {
    for (let i = 0; i < branches; i++) {
      const subGraph = treeGraph(depth - 1, branches);
      graph[0].connect(subGraph[0]);
      graph = graph.concat(subGraph);
    }
  }

  return graph;
}

const nodeSize = 8;

function drawGraph(graph) {
  let canvas = document.querySelector('canvas');
  if (!canvas) {
    canvas = document.body.appendChild(document.createElement('canvas'));
    canvas.width = canvas.height = 400;
  }
  let cx = canvas.getContext('2d');

  cx.clearRect(0, 0, canvas.width, canvas.height);
  let scale = new Scale(graph, canvas.width, canvas.height);

  // Draw the edges.
  cx.strokeStyle = 'black';
  cx.lineWidth = 3;
  for (let i = 0; i < graph.length; i++) {
    let origin = graph[i];
    for (let target of origin.edges) {
      if (graph.indexOf(target) <= i) continue;
      cx.beginPath();
      cx.moveTo(scale.x(origin.pos.x), scale.y(origin.pos.y));
      cx.lineTo(scale.x(target.pos.x), scale.y(target.pos.y));
      cx.stroke();
    }
  }

  // Draw the nodes.
  cx.fillStyle = 'red';
  for (let node of graph) {
    cx.beginPath();
    cx.arc(scale.x(node.pos.x), scale.y(node.pos.y), nodeSize, 0, 7);
    cx.fill();
  }
}

class Scale {
  constructor(graph, width, height) {
    let xs = graph.map((node) => node.pos.x);
    let ys = graph.map((node) => node.pos.y);
    let minX = Math.min(...xs);
    let minY = Math.min(...ys);
    let maxX = Math.max(...xs);
    let maxY = Math.max(...ys);

    this.offsetX = minX;
    this.offsetY = minY;
    this.scaleX = (width - 2 * nodeSize) / (maxX - minX);
    this.scaleY = (height - 2 * nodeSize) / (maxY - minY);
  }

  // The `x` and `y` methods convert from graph coordinates into
  // canvas coordinates.
  x(x) {
    return this.scaleX * (x - this.offsetX) + nodeSize;
  }
  y(y) {
    return this.scaleY * (y - this.offsetY) + nodeSize;
  }
}

const graph = treeGraph(3, 5);
drawGraph(graph);
