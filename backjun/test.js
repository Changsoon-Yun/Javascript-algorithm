let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim().split("\n");
let testLength = [];
let lineNumber = [];

for (let i = 1; i < input.length; i++) {
  input[i].length === 2 && testLength.push(input[i]);
}

for (let i = 1; i < input.length; i++) {
  for (let j = 0; j < testLength.length; j++) {
    input[i] === testLength[j] && lineNumber.push(i);
  }
}

let answer = [];
for (let i = 0; i < input[0]; i++) {
  for (let j = 0; j < testLength[i]; j++) {
    if (input[lineNumber[i] + j + 1].split(" ").sort((a, b) => b - a)[0] >= 0) {
      answer.push(
        input[lineNumber[i] + j + 1].split(" ").sort((a, b) => b - a)[0]
      );
    }
  }
}

for (let i = 0; i < input[0]; i++) {
  console.log(
    answer
      .slice(i * 3, i * 3 + 3)
      .reduce((prev, curr) => Number(prev) + Number(curr))
  );
}
