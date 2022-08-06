type Alignment = 'left' | 'right';

function printText(message: string, alignment: Alignment) {
  console.log(`${message} with ${alignment} alignment`);
}

printText('hi', 'left');
printText('hi', 'right');

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const kaftar: Bird = { fly: () => console.log('kaftar is flying') };

if (isFish(kaftar)) {
  console.log('kaftar is a fish');
  kaftar.swim();
} else {
  kaftar.fly();
}

enum ShapeKind {
  'CIRCLE' = 'circle',
  'SQUARE' = 'square',
}

type Circle = {
  kind: ShapeKind.CIRCLE;
  radius: number;
};

type Square = {
  kind: ShapeKind.SQUARE;
  sizeLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.sizeLength ** 2;
  }
}
