type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe";
  neckLength: number;
}

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  switch (animal.kind) {
    case "elephant":
      return `An elephant weighs ${animal.weight} kg.`;
    case "tiger":
      return `A tiger can run ${animal.speed} km/h.`;
    case "peacock":
      return `Peacocks have feathers that are ${animal.featherLength} cm long.`;
    default:
      const _exhaustiveCheck: never = animal;
      throw new Error(`Invalid Animal: ${JSON.stringify(_exhaustiveCheck)}`);
  }
}