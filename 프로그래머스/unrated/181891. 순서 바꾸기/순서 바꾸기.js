function solution(num_list, n) {
    var answer = [];
    answer = num_list.splice(n).concat(num_list)
    return answer;
}