function solution(array, n) {
    var answer = 0;
    for(i=0; i<array.length; i++) {
        array[i] === n ? answer++ : null
    }
    return answer;
}