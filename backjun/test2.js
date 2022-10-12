let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number1 = input[0];
let number2 = input[1];

let one = number1[0] * 100;
let ten = number1[1] * 10;
let hundred = number1[2];

let line3 = one * number2[2] + ten * number2[2] + hundred * number2[2];

let line4 = one * number2[1] + ten * number2[1] + hundred * number2[1];

let line5 = one * number2[0] + ten * number2[0] + hundred * number2[0];

let line6 = line3 + line4 * 10 + line5 * 100;

console.log(line3);
console.log(line4);
console.log(line5);
console.log(line6);
