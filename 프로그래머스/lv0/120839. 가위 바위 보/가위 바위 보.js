function solution(rsp) {
    var answer = '';
    answer = rsp.split('').map(item=> {
       if(item === "2") {
           return item = 0
       }
        
        if(item === "5") {
           return item = "2"
       }
        
        if(item === "0") {
           return item = "5"
       }
    }).join('')
    return answer;
}