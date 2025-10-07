function safeGet<T>(array: T[], index: number): T | undefined {
  if (index >= 0 && index < array.length) {
    return array[index];
  }

  return undefined;
}

const names: string[] = ["John", "Jane"];
const thirdName = safeGet(names, 2); // Should return undefined

const numbers: number[] = [1, 2, 3];
const number = safeGet(numbers, 1); // Should return 2