interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape) {
  return `This shape is ${shape.color}`;
}