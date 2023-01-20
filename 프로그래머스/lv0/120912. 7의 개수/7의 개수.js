function solution(array) {
    var answer = 0;
    array.map((v) => {
       v.toString().split("").map((c)=>c ==7 && answer++)
     }
    )
    return answer;
}