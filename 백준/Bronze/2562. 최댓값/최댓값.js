let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let newInput = [...input];
let bigNumber = input.sort((a, b) => b - a)[0];
console.log(bigNumber);
for (let i = 0; i < input.length; i++) {
  if (newInput[i] === bigNumber) {
    console.log(i + 1);
  }
}