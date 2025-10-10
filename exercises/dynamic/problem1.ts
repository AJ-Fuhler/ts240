interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let employee: Employee = {
  name: "AJ Fuhler",
  age: 28,
  employeeId: 1,
};