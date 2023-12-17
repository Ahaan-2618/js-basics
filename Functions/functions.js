function sayMyName() {
  console.log("A");
  console.log("H");
  console.log("A");
  console.log("A");
  console.log("N");
}

sayMyName();

// ... is called rest and spread, it just depends on where we are using this.

function calculateCartPrice(...amount) {
  // here it is called as rest
  console.log(amount);
}

calculateCartPrice(200, 400);

// const userObject = {
//   name: "Ahaan",
//   age: "26",
// };
