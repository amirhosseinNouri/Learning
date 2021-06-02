interface PointInterface {
  x: number;
  y: number;
}

type PointType = {
  x: number;
  y: number;
};

const getRectangleAreaInterface = (args: PointInterface) => args.x * args.y;
const getRectAngleAreaAliased = (args: PointType) => args.x * args.y;

// getRectangleAreaInterface({ x: 12 });
// getRectAngleAreaAliased({ x: 2 });

interface ThreeDimensions extends PointType {
  z: number;
}

class Rectangle implements PointType {
  x = 2;
  y = 4;
}
