interface Accounts {
  [username: string]: UserProfile;
  admin: UserProfile;
}

type UserProfile = {
  name: string;
  age: number;
  email: string;
}

const userAccounts: Accounts = {
  coolCoder123: {
    name: "Ada Lovelace",
    age: 27,
    email: "ada@lovelace.com",
  },
  jsPro42: {
    name: "Grace Hopper",
    age: 32,
    email: "grace@hopper.com",
  },
  admin: {
    name: "Alan Turing",
    age: 41,
    email: "alan@turing.com",
  },
};