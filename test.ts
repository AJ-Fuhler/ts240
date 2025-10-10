function sum(prefix: string, ...numbers: number[]): string {
  const total = numbers.reduce((total, n) => total + n, 0);
  return `${prefix}${total}`;
}

type SumParameters = Parameters<typeof sum>;

const input: SumParameters = ["The total is: ", 1, 2, 3, 4];
const result = sum(...input);