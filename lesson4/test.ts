type Circle = {
  radius: number;
  opacity?: number;
};

type Square = {
  sideLength: number;
};

type Shape = Circle | Square;

function logOpacity(shape: Shape): void {
  "opacity" in shape && console.log("This circle has opacity:", shape.opacity);
}

