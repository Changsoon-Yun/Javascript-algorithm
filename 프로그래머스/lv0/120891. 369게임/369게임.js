function solution(order) {
    var answer = 0;
    order.toString().split("").map((v) => (v==3||v==6 ||v==9) && answer++)
    return answer;
}