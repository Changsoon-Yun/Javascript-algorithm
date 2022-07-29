function solution(s) {
    var answer = true;
    answer = /[a-zA-Z]/.test(s)
    if (s.length ===4 || s.length===6) {
        answer = answer !== true;
    }else{
        answer =  false
    }
    console.log(answer)
    return answer;
}

solution("2342")