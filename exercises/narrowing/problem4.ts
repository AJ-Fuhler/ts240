interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * (shape.radius * shape.radius);
  } else {
    return shape.sideLength * shape.sideLength;
  }
}