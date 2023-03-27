function solution(list,n) {
  list.sort((a,b)=>a - b)
  return list.sort((a,b)=> Math.abs(n-b) - Math.abs(n-a)).reverse()
}
solution([10,9,8,7,6,5,4,3,2,1,11],6);
