let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().split("\n");
let callLength = parseInt(input[0].split(" "));
let callTime = input[1].split(" ");

let Y = 0;
let M = 0;

for (let i = 0; i < callTime.length; i++) {
  let YPay = (parseInt(callTime[i] / 30) + 1) * 10;

  let MPay = (parseInt(callTime[i] / 60) + 1) * 15;

  Y = Y + YPay;
  M = M + MPay;
}

if (Y > M) {
  console.log("M", M);
} else if (Y < M) {
  console.log("Y", Y);
} else if (Y === M) {
  console.log("Y M", M);
}
