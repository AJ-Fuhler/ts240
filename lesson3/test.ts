class Circle {
  constructor(public radius: number) {}
}

class Square {
  constructor(public sideLength: number) {}
}

type Shape = Circle | Square;

function describeShape(shape: Shape): void {
  if (shape instanceof Circle) {
    console.log(shape.radius);
  } else {
    console.log(shape.sideLength);
  }
}