function solution(intStrs, k, s, l) {
    var answer = [];
    
    intStrs.map(item=>item.slice(s,s+l)).map(item=> item > k ? answer.push(+item) : item)
    
    
    return answer
}