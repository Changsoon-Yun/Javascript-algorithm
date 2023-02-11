function solution(n) {
  let answer = 0;
  let count = 0;
  while (true) {
    if (n % 5 === 0) {
      answer = n / 5 + count;
      break;
    }

    if (0 > n) {
      answer = -1;
      break;
    }

    count++;
    n -= 3;
  }
}

solution(36);

// 5개로 6개 3개로 2개

// for (let i = 1; i < 100; i++) {
//   console.log(i);
//   solution(i);
//   console.log(" ");
// }
