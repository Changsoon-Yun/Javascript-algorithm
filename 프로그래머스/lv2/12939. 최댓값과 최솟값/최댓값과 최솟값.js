function solution(s) {
  var answer = "";
  const splits = s.split(" ")
  answer += (Math.min(...splits))
  answer += " "
  answer += (Math.max(...splits))
  return answer
}