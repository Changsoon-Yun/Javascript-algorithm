function solution(n, numlist) {
    var answer = [];
    numlist.map((v)=>Number.isInteger(v/n) && answer.push(v))
    return answer;
}