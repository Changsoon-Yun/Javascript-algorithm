function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    let a = quiz[i].split(" ")[0];
    let pm = quiz[i].split(" ")[1];
    let b = quiz[i].split(" ")[2];
    let ans = quiz[i].split(" ")[4];
    let aa = 0;
    if (pm == "+") {
      aa = Number(a) + Number(b);
    } else {
      aa = Number(a) - Number(b);
    }
    if (aa == ans) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }
  console.log(answer);
  return answer;
}
