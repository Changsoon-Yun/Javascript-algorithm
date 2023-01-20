function solution(n) {
    var answer = 0;
    // console.log(n.toString().split("").reduce((prev,curr)=>prev+curr))
    answer = n.toString().split("").map((v)=>Number(v)).reduce((prev,curr)=> prev + curr)
    return answer;
}