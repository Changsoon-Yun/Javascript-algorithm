function solution(num_list) {
    var answer = 0;
    let a = num_list.filter((item)=> item%2===0).join("")
    let b = num_list.filter((item)=>item%2!==0).join("")
    
    answer  = +a+ +b
    return answer;
}