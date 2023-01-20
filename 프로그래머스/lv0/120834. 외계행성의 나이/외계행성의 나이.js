function solution(age) {
  var answer = "";
  age
    .toString()
    .split("")
    .map((v) => (answer += String.fromCharCode(v.charCodeAt() + 49)));

  return answer;
}