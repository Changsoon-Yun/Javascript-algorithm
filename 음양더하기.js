function solution(absolutes, signs) {
    let answer = 0;
    signs.forEach((a, i)=>{
        if( signs[i] === false) {
            absolutes[i] = -absolutes[i]
        }
    })
    absolutes.forEach((a)=>{
        answer += a
    })
    return answer;
}

solution([4,7,12], [true,false,true])