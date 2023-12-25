// Print table with two nested loops

for (let i = 1; i <= 10; i++) {
  console.log(`We will print table of number ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    1;
  }
}

for (let index = 0; index < 10; index++) {
  if (index == 5) {
    console.log(`We got the number ${index}`);
    break;
  }
  console.log(`Current number is ${index}`);
}

// Do while

let i = 0;
while (i < 10) {
  console.log(`Current value is ${i}`);
  i = i + 1;
}

let value = 1;
do {
  console.log(`Current value is ${value}`);
  value += 1;
} while (value < 10);
