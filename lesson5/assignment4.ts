interface Animal {
  name: string;
  makeSound: () => string;
}

interface Dog extends Animal {
  fetch: () => string;
}

const myDog: Dog = {
  name: "rex",
  makeSound() {
    return "Generic animal sound";
  },
  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

console.log(myDog.fetch());