function solution(n) {
    var answer = 0;
    answer = Number.parseInt(n.toString(3).split('').reverse().join(""), 3)
    return answer;
}

solution(125)