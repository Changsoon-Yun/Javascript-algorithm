let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

let newInput = new Set(input);

const uInput = [...newInput];

uInput.sort((a, b) => {
  if (a.length === b.length) {
    return (a > b) - (a < b);
  } else {
    return a.length - b.length;
  }
});

for (let i = 0; i < uInput.length; i++) {
  console.log(uInput[i]);
}
