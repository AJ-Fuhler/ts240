type CustomArray = {
  [index: number]: string | number;
}

function processCustomArray(arr: CustomArray) {
  if (Array.isArray(arr)) {
    return arr
      .filter(item => typeof item === "string")
      .map(str => str.toUpperCase());
  }

  return [];
}