function solution(my_string) {
  var answer = [];
  let reg = /^[a,i,o,u,e]/;
  my_string.split("").map((v) => (!v.match(reg) ? answer.push(v) : null));
  return answer.join("");
}