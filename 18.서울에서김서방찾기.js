function solution(seoul) {
    var answer = '';
    seoul.forEach((a, i)=> {
        if(seoul[i]==='Kim') {
            answer = `김서방은 ${i}에 있다`
        }
    })

    return answer;
}

solution(["Jane", "Kim"])