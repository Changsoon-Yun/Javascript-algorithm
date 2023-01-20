function solution(s1, s2) {
    var answer = 0;
    s1.map((v)=>s2.map((v2)=> v===v2 ? answer++ : null))
    return answer;
}