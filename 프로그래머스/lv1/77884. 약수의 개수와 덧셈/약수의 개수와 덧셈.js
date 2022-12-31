function solution(left, right) {
  var answer = 0;
  for (let i = 0; i < right-left +1; i++) {
    let numbers = left+i
    let arr=[]
    for (let j = 0; j <= numbers; j++) {
      if(numbers % j === 0) {
        arr.push(j)
      }
    }
    if(arr.length % 2 === 0) {
      answer = answer + numbers
    } else {
      answer = answer - numbers
    }
  }
  return answer;
}