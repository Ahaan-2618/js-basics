let amount = 123.893;
console.log(amount.toPrecision(3)); // 124
console.log(amount.toFixed(2)); // 123.89

const amount1 = 1000000;
console.log(amount1.toLocaleString("en-IN"));

console.log(Math.abs(-4)); // +4
console.log(Math.round(4.56)); // 5
console.log(Math.ceil(4.51)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.random()); // 0.0 - 1.0
console.log(Math.random() * 10 + 1); // to avoid 0

const minNum = 10;
const maxNum = 20;

console.log(Math.floor(Math.random() * (maxNum - minNum)) + minNum);
