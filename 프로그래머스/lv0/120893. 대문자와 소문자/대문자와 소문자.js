function solution(my_string) {
  var answer = "";
  let reg = /^[a-z]/;

  answer = my_string
    .split("")
    .map((v) => (v.match(reg) ? v.toUpperCase() : v.toLowerCase()))
    .join("");

  return answer;
}
