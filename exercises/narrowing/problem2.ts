function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every(elem => typeof elem === "string");
}