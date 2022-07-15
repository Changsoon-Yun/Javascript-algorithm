function solution(num) {
  var answer = '';
  if (num % 2 === 0) {
    answer = 'Even'
    console.log(answer)
    return answer;
  } else {
    answer = 'Odd'
    console.log(answer)
    return answer;

  }

}

function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

solution(1232154155232)