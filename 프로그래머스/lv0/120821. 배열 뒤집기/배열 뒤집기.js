function solution(num_list) {
    var answer = [];
    num_list.map((data)=> answer.unshift(data))
    return answer;
}