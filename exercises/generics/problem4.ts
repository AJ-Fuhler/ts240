interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

let example: KeyValuePair<string, number> = {
  key: "Hello",
  value: 42,
};