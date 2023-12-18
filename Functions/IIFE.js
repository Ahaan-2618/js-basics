// Immediate invoked function expression

// named IFFE
(function one() {
  console.log("DB CONNECTED : 8000");
})();

// this can give error if we do not end this code with ; as IIFE does not tell JS where to stop execution by self, so use ;

// Un-named IFFE
(() => {
  console.log("DB CONNECTED : 3000");
})();

// to remove pollution from global scope we use IIFE and to invoke function ASAP

((port) => {
  console.log(`DB CONNECTED : ${port}`);
})(4000);
