function solution(day, arr){
  return arr.filter((num)=> {
    return num.toString().split("")[1] == day
  }).length
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));