function solution(n) {
    var answer = [];
    const str = n.toString().split('')
    for (let i = 0; i < n.toString().length; i++) {
        let x = str.pop()
        answer.push(x)
    }
    answer = answer.map(str => Number(str))
    console.log(answer)
    return answer;
}

solution(15267) // ==> 76251