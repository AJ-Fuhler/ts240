type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Triangle = {
  kind: "triangle";
  base: number;
  height: number;
};

type Shape = Circle | Square | Triangle;

function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    case "triangle":
      area = 0.5 * shape.base * shape.height;
      break;
    default:
    const _exhaustiveCheck: never = shape;
    throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }

  console.log("The area is " + area);
}