function solution(my_string) {
  var answer = "";
  let reg1 = /^[a-z]/;
  let reg2 = /^[A-Z]/;

  answer = my_string
    .split("")
    .map((v) => (v.match(reg1) ? v.toUpperCase() : v.toLowerCase()))
    .join("");

  console.log(answer);
  return answer;
}
solution("abCdEfghIJ");
