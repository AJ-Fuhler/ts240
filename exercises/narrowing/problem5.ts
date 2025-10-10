function logUnknown(value: unknown) {
  if (typeof value === "string") {
    console.log(value);
  }
}