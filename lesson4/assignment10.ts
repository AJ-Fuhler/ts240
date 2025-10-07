type Bird = {
  kind: 'bird';
  name: string;
  wingspan: number;
};

type Dog = {
  kind: 'dog';
  name: string;
  age: number;
}

type Animal = Bird | Dog;

function describeAnimal(animal: Animal): string {
  switch (animal.kind) {
    case "bird":
      return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`;
    case "dog":
      return `${animal.name} is a ${animal.age} year(s) old dog.`;
  }
}