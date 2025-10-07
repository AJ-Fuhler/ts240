type Input = string | number | number[];

function processInput(input: Input) {
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input.toFixed(2));
  } else {
    console.log(input.length);
  }
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3