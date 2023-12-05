"use-strict"; // treat all JS code as newer version

// Primitive

const name = "Name";
const age = 18;
const isAdult = true;
const isMarried = null; // console.log(typeof null); will be object
let education; // undefined // const can not be used as undefined
const bigNum = 123422222222222222222222222222222222222n; // bigInt
const sym = Symbol("Hello"); // Symbol // to make value unique

console.log(typeof sym);
console.log(typeof bigNum);

// Non-primitive

// Array
// Object
// Function

// how we are storing data in memory defines types of data
// ---- Primitive = call by value
// ---- Non - Primitive ( Reference ) = call by refernce

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
