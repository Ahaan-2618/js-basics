const simgleTonObj = new Object();
const objectLitral = {};

objectLitral.id = 1;
objectLitral.name = "Ahaan";
objectLitral.userDetails = { loggedIn: true, isAdult: true };
console.log(objectLitral);

console.log(objectLitral["userDetails"]["loggedIn"]);
console.log(objectLitral.userDetails.loggedIn);
console.log(objectLitral?.id);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
const obj3 = Object.assign({}, obj1, obj2); // {} will confirm that finally we will receive only one object

console.log(obj3);

// ---------------- OR ----------------

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);
console.log(Object.keys(obj4)); // output will be array
console.log(Object.values(obj4)); // output will be array
console.log(Object.entries(obj4)); // output will be array
console.log(objectLitral.hasOwnProperty("id"));
