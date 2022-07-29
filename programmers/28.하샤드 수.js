function solution(x) {
    var answer = true;
    let sum = 0
    let str = x.toString()
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    answer = Number.isInteger(x/sum)
    return answer;
}

solution(12)