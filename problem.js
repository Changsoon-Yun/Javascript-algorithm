function solution(arr1, arr2) {
  let answer = false;
  if(arr1.length !== arr2.length) return answer
  let newArr = arr1.sort((a,b)=>a-b).map((v)=> v*v)
  arr2.sort((a,b)=>a-b)

  // console.log(newArr)

  answer = JSON.stringify(newArr) === JSON.stringify(arr2)
  console.log(answer)

  return answer;
}

solution([1,3,2], [1,4,9]);
