switch ("Ahaan") {
  case "Soni":
    console.log("True 1");
    break;
  case "Ahaan":
    console.log("True 2");
    break;
  default:
    console.log("No match");
    break;
}

// Falsy values

// false, 0, -0, BigInt 0n , "", null, undefined, NaN

// rest are truthy values

// "false", "0", [], function(){}

// ---------------------------

// false == 0
// false = ""
// 0 == ""
// all false

// --------------- Nullish Operator

let x;
x = null ?? 10;
console.log(x);

// ternary operator

const score = 100;

score > 90 ? console.log("More than 90") : console.log("Less than 90");
