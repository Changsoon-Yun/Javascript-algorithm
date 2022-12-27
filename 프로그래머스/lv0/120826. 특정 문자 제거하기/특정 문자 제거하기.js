function solution(my_string, letter) {
    var answer = '';
    answer = my_string.split("").map((v)=>v===letter?"" : v).join("")
    return answer;
}