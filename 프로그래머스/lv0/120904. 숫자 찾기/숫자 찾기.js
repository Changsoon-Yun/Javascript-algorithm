function solution(num, k) {
  var answer = -1;

  num = num.toString().split("");

  for (let i = 0; i < num.length; i++) {
    if (num[i] == k) {
      return (answer = i + 1);
    }
  }

  return answer;
}