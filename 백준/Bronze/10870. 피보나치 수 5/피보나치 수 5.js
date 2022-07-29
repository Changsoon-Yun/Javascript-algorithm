let input = require('fs').readFileSync('/dev/stdin').toString()
function fibo(num) {
   if (num < 1) {
    return 0;
  }
  if (num < 3) {
    return 1;
  }
  return fibo(num-1) + fibo(num-2)
}

console.log(fibo(input));