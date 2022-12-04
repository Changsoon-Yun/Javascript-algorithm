function solution(n) {
    var answer = '';
    
    const str = '수박'
    answer = str.repeat(n).slice(0, n)
    
    return answer;
}