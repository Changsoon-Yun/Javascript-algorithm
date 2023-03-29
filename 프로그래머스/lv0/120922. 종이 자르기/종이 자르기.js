function solution(m, n) {
  let answer = 0;
  if(m === 1 && n === 1) return answer
  let min = Math.min(...[m,n])
  let max = Math.max(...[m,n])

  answer = (min-1) + ((max-1) * min)

  return answer;
}