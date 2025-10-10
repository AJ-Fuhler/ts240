function printLength(value: string | string[]) {
  if (Array.isArray(value)) {
    console.log(`Array count: ${value.length}`);
  } else {
    console.log(`String length: ${value.length}`);
  }
}