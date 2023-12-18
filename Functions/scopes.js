var a = 1; // global scope
let b = 2; // block scope
const c = 3; // block scope

function one() {
  const userName = "Ahaan";

  function two() {
    const website = "Youtube";
    console.log(userName);
  }
  two();
  // console.log(website);
}

one();

console.log(addOne(5)); // hoisting worked
function addOne(num) {
  return num + 1;
}

console.log(addTwo(2)); // this will give error // using before declaration
const addTwo = function addThree(num) {
  return num + 3;
};
