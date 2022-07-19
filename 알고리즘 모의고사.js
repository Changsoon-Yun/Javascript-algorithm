function solution(chkin, chkout) {
    let answer = 0;

    for(let i = 0; i < chkin.length; i++){
        if(chkout[i] >= 29) {
            chkout[i] = 21
        }
        answer += chkout[i] - chkin[i]
    }

    return answer
}

solution([9, 7, 8, 9, 7, 9, 8],
    [23, 22, 26, 26, 29, 27, 22])