function solution(my_string) {
    var answer = [];
    let arr = my_string.split("").sort()
    
    let reg = /[0-9]/
    arr.map((v)=>reg.test(v) && answer.push(Number(v)))
    
    return answer;
}