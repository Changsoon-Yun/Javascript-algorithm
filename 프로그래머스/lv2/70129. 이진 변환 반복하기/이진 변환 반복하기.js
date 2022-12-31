var answer = [];
var totalNum = 0;
var transNum = 0;

function solution(s) {
  let count = 0;
  let zeroCount = 0;

  if (s == 1) {
    answer[0] = transNum;
    answer[1] = totalNum;

    return answer;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      count++;
    }
    if (s[i] === "0") {
      zeroCount++;
    }
  }

  totalNum += zeroCount;
  transNum++;
  return solution(count.toString(2));
}

