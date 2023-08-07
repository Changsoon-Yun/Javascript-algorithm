function countDivisors(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count += (i * i === num) ? 1 : 2;
    }
  }
  return count;
}

function solution(n) {
  let compositeCount = 0;

  for (let i = 2; i <= n; i++) {
    if (countDivisors(i) >= 3) {
      compositeCount++;
    }
  }

  return compositeCount;
}