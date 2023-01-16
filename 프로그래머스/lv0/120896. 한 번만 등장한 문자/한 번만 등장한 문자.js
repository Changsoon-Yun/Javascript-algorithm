function solution(s) {
    var answer = '';
    let obj = {}
    s.split("").map((v)=> (
        obj[v] ? obj[v]++ : obj[v] = 1
    ))
    const dupArr = [...s]
    const set = new Set(dupArr)
    
    const uniqueArr = [...set];
    
    uniqueArr.sort().map((v)=> (
        obj[v] == 1? answer += v : null 
    ))
    
    
    return answer;
}