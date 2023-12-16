// singleton
// object literals

const mySym = Symbol("Key1");

const myObj = {
  name: "Ahaan",
  age: 18,
  location: "Jaipur",
  fullName: "Ahaan Soni", // we can not access this value by ( . ) so bracket notation will be used
  [mySym]: "myKey1",
};

console.table([myObj.age, myObj["age"], myObj["fullName"]]); // in 2nd type key is default string so we can access like this as well.
console.log(typeof myObj[mySym]);

myObj.greetings = function () {
  console.log(`Hello ${this.name}`); // string interpolation // use this for current function property
};

console.log(myObj.greetings());

Object.freeze(myObj); // to make immutable
