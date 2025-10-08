type User = Map<number, string>;

const obj: User = new Map();
obj.set(1, "Jane");
obj.set(2, "30");
obj.set(3, "female");

console.log([...obj.keys()].every((key) => typeof key === "number")); // Output: true