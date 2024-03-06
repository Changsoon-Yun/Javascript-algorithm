function solution(l, r) {
    var answer = [];
    for(let i = l; i<=r; i++) {
        if(i.toString().match(/^[05]+$/)) {
            answer.push(i)
        }
    }
    if(answer.length < 1) return [-1]
    return answer;
}