function solution(i, j, k) {
    var answer = 0;
    for(index=i; index<=j; index++) {
        index.toString().split("").map((v)=> v==k ? answer++ : null)
    }
    return answer;
}