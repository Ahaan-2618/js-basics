// copy operations create shallow copy

const arr1 = [0, 1, "kartik", "ahaan"];
let arr2 = arr1;
arr2.push("name");
console.log(arr1);
console.log(arr2);

// i changed in the copy then the original changed as well because of same reference

arr2.unshift("on first"); // add on first place
console.log(arr2);

arr2.shift(); // remove 1st value
console.log(arr2);

console.log(arr2.includes(0));
console.log(arr2.indexOf(1));
console.log(arr2.slice(0, 3));
console.log(arr2.splice(0, 3)); // changes original array
console.log(arr2.join()); // converts array to sting and join

// -----------------------------------------------------------------------------------------------------------

const marvel = ["IronMan", "Thor", "Hulk", "SpiderMan"];
const dc = ["Shazam", "Flash", "Shazam", "Batman"];

console.log(marvel.concat(dc)); // concat return new array and needs to be stored in a variable
const all_heros = [...marvel, ...dc];
console.log(all_heros);

const arr3 = [12, 11, [0, 1, 2, [3, 4, 5, 6, [7, 8, 9], 3]]];
console.log(arr3.flat(Infinity));

const superHero = "Dr. Doom";
console.log(Array.from(superHero));

const heroDetail = { name: "Dr. Doom", age: 18 };
console.log(Array.from(heroDetail)); // blank array as we have to tell it to form an array with keys or values

const score1 = 100;
const score2 = 200;
console.log(Array.of(score1, score2)); // returns new array
