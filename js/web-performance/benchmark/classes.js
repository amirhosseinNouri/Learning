const makeAPoin = () => {
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }

  return new Point(1, 2);
};

const a = makeAPoin();
const b = makeAPoin();
console.log(%HaveSameMap(a, b));
