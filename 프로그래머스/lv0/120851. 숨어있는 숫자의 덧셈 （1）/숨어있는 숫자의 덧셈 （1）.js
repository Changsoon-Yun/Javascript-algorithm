function solution(my_string) {
  var answer = 0;
  let arr = my_string.split("");
  let reg = /[0-9]/;
  arr.map((v) => reg.test(Number(v)) && (answer += Number(v)));
  return answer;
}