let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
let answer = input.sort((a, b) => a - b);
// console.log(answer)
console.log(answer.join("\n"))