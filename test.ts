interface MyJSONData {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | MyJSONData
    | Array<string | number | boolean | null | MyJSONData>;
}

const jsonData: MyJSONData = JSON.parse(
  '{ "name": "John", "age": 30, "address": { "street": "123 Main St", "city": "Anytown", "state": "CA" }, "hobbies": ["reading", "music"] }'
);

/*
Note that the shape of jsonData matches the index signature:

jsonData = {
  name: "John",
  age: 30,
  address: { street: "123 Main St", city: "Anytown", state: "CA" },
  hobbies: ["reading", "music"],
};

*/
