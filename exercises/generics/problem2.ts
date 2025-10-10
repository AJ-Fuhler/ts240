function printId(id: number | string) {
  if (typeof id === "number") {
    console.log("Your ID is a number");
  } else {
    console.log("Your ID is a string");
  }
}