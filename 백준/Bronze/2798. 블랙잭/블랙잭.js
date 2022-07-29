let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let limit = input[0].split(" ")
let givenCard = input[1].split(" ")
let answer = []
function solution(n) {
  for (let i = 0; i < givenCard.length; i++) {
    for (let j = i+1; j < givenCard.length; j++) {
      for (let k = j+1; k < givenCard.length; k++) {
        if(parseInt(limit[1]) >= parseInt(givenCard[i])+parseInt(givenCard[j])+parseInt(givenCard[k])) {
          answer.push(parseInt(givenCard[i])+parseInt(givenCard[j])+parseInt(givenCard[k]))
        }
      }
    }
  }
  console.log(answer.sort((a,b)=> b-a)[0])
  return answer.sort((a,b)=> b-a)[0]
}

solution(input)
