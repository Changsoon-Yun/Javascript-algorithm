let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");

let number1 = input[0];
let number2 = input[1];
let line3 = 0;

let one = number1[0] * 100;
let ten = number1[1] * 10;
let hundred = number1[2];

line3 =
  one * Number(number2[2]) +
  ten * Number(number2[2]) +
  hundred * Number(number2[2]);

line4 =
  one * Number(number2[1]) +
  ten * Number(number2[1]) +
  hundred * Number(number2[1]);

line5 =
  one * Number(number2[0]) +
  ten * Number(number2[0]) +
  hundred * Number(number2[0]);

line6 = line3 + line4 * 10 + line5 * 100;

console.log(line3);
console.log(line4);
console.log(line5);
console.log(line6);
