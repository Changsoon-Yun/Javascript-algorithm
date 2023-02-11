function solution(s) {
  var answer = s.length;
  let half = s.length / 2 + 1;
  let word = s[0];
  let arr = [];
  for (let i = 0; i < half; i++) {
    word += s[i + 1];
    for (let j = 0; j < half; j++) {
      word.repeat(j) === s && arr.push({ word, i, j });
    }
  }

  if (arr.length > 0) {
    return arr[0].word.length;
  }

  return answer;
}

solution("abc");
