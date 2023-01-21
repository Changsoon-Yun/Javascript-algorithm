function solution(n) {
  var answer = 0;

  let i = 0;
  let fac = 1;
  while (n >= fac) {
    i++;
    fac = fac * i;
  }

  answer = i - 1;
  return answer;
}
