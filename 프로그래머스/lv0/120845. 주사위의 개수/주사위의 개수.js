function solution(box, n) {
    var answer = [];
    for(i=0;i<box.length;i++) {
        answer.push(Math.floor(box[i]/n))
    }
    answer = answer[0] * answer[1] *answer[2]
    return answer;
}