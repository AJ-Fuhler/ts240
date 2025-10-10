function filterByType<T>(arr: any[], type: string): T[] {
  return arr.filter(elem => typeof elem === type);
}

console.log(filterByType<string>(["hello", "world", 42, true], "string")); // ["hello", "world"]