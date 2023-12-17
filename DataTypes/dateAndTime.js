const date1 = new Date();

console.log(date1);
console.log(date1.toString());
console.log(date1.toDateString());
console.log(date1.toLocaleString());
console.log(date1.toLocaleDateString());
console.log(date1.getUTCDate());
console.log(typeof date1);

const myCreatedDate = new Date("01-14-2023");
console.log(myCreatedDate.toLocaleDateString());

const timeStamp = Date.now();
const myCreatedDate1 = myCreatedDate.getTime();
console.log(timeStamp - myCreatedDate1); // comparison date in MS from 1970

console.log(date1.toLocaleDateString("default", { weekday: "long" }));
