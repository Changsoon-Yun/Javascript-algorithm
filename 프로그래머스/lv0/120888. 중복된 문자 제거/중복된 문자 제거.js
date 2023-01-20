function solution(my_string) {
    var answer = '';
    my_string = my_string.split("")
    let set = new Set(my_string)
    answer = [...set].join("")
    return answer;
}