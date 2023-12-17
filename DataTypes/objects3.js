const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, age, eyeColor } = person; // destructuring

console.table([firstName, lastName, age, eyeColor]);
