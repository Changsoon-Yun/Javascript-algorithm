function solution(arr) {
    var answer = 0;
    arr.forEach((a)=>{
        answer += a
    })
    answer = answer/arr.length
    return answer;
}

solution([1,2,3,4])