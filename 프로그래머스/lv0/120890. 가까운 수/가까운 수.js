function solution(array, n) {
  var answer = [];
  let arr = []
  array.map((v)=> arr.push(Math.abs(n-v)))
  const max = Math.min(...arr);
  arr.map((v,i)=> v==max && (answer.push(array[i])))
  answer =  answer.sort((a,b)=>a-b)[0]
  return answer;
}