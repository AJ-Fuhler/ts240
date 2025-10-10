type Device = {
  manufacturer: string;
  model: string;
  year: number;
};

let computer: Device = {
  manufacturer: "MSI",
  model: "A18B",
  year: 2024,
};

let smartphone = {
  manufacturer: "Apple",
  model: "iPhone X",
  year: 2016,
  hasHeadphoneJack: false,
};

let anotherDevice: Device = smartphone;