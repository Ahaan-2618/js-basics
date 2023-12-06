// Memory Types
// stack -> Primitive ( Copy of original value )
// heap -> Non - Primitive ( Reference of original value )

let userName = "Ahaan Soni";
console.log(userName); // Ahaan Soni

let userNamecopy = userName;
userNamecopy = "Kartik Soni";
console.log(userNamecopy); // kartik Soni // Because of copy this got changed and primary value remain same

let userObj = {
  email: "Sample@gmail.com",
  name: "Kartik",
};

let userObj1 = userObj;
userObj1.email = "Google@gmail.com";

console.table([userObj, userObj1]); // provided refernce and both values got changed
