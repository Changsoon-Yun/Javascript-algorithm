function solution(names) {
    var answer = [];
    answer = names.filter((item,idx)=> {
        if(idx % 5=== 0 || idx === 0) {
            return item
        }
    })
    
    console.log(answer)
    return answer;
}