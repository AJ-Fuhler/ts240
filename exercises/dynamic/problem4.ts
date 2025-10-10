interface UserData {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof UserData;

function printUserDataField(userData: UserData, key: UserKeys) {
  console.log(userData[key]);
}