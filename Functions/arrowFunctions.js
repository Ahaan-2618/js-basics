const user = {
  name: "Ahaan",
  age: 21,
  message: function () {
    console.log(`Hello ${this.name}, Welcome !`); // this to access current context, this keyword does not rely inside arrow function
    // or in normal functions
  },
};

user.message();

console.log(this); // this will give empty object as this refers to correct context and nothing in present in current context
// but when we console this keyword in a function we weill get some values provided by node

// -------------------- Arror Functions -------------------

const functionOne = (num1, num2) => {
  console.log(num1 + num2);
};
functionOne(2, 4);

const functionTwo = (num1, num2) => num1 + num2; // implicit return because in one line it assumes that you will return this
// wrap this in () if need to return object
console.log(functionTwo(2, 8));
