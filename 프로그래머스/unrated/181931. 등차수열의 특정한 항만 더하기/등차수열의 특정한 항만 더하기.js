function solution(a, d, included) {
    var answer = 0;
    let arr = [a]
    
    for(let i  = 1; i<included.length; i++) {
        let  aa = a;
        arr.push(aa+ d*i)
    }
    arr.map((item,idx)=> (
        included[idx] ? answer = answer+item : item
    ))
    return answer;
}