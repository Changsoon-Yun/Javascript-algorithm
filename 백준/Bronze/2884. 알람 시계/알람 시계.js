let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let hour = input[0];
let minute = input[1];
let early = 45;

if (minute - early < 0) {
  if (hour - 1 == -1) {
    return console.log(23, 60 + (minute - early));
  }
  return console.log(hour - 1, 60 + (minute - early));
} else if (minute - early >= 0) {
  return console.log(hour, minute - early);
}
