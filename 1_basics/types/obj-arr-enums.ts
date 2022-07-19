// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 25,
//   hobbies: ["first", "second"],
//   role: [2, "author"],
// };

//person.rule.push("works") --> push works for tuples !!!

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
};

const person = {
  name: "Max",
  age: 25,
  hobbies: ["first", "second"],
  role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
};

if (person.role === Role.ADMIN) {
  console.log("admin");
};
