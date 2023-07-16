function solution(num_str) {
      var answer =  num_str.split("").map(item=> Number(item)).reduce((a,b)=> (
        a + b
    ))
    return answer;
}