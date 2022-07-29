function solution(n) {
    var answer = 0;
    if (Number.isInteger(Math.sqrt(n))) {
        let x = (Math.sqrt(n) + 1)
        answer = (x * x)
    } else {
        answer = -1
    }
    return answer
}

solution(121)