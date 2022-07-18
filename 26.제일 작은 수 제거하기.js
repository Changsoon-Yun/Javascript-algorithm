function solution(arr) {
    var answer = [];
    let a = Math.min(...arr)
    for (let i = 0; i < arr.length; i++) {
        if( a===arr[i]) {
            arr.splice(i, 1)
            answer = arr
        }
    }
    if(arr.length=== 0) {
        answer.push(-1)
    }
    console.log(answer)
    return answer;
}

solution([10])