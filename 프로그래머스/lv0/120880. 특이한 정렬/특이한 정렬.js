function solution(numlist,n) {
  let answer = []
  numlist.sort((a,b)=>a - b)
  answer = numlist.sort((a,b)=> Math.abs(n-b) - Math.abs(n-a)).reverse()
  return answer;
}