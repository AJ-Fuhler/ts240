interface Dog {
  bark: () => void;
}

interface Cat {
  meow: () => void;
}

type Pet = Dog & Cat;

let pet: Pet = {
  bark() {
    console.log("Woof");
  },
  meow() {
    console.log("Meow");
  },
}