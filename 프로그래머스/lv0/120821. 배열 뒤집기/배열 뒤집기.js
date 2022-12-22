function solution(num_list) {
    var answer = [];
    let result = num_list.map((data)=> answer.unshift(data))
    return answer;
}