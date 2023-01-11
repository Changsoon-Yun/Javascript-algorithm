function solution(array) {
    var answer = [];
    let arr = [...array]
    arr.sort((a,b)=>b-a)
    
    let index = 0;
    
    array.map((v,i) =>  v == arr[0] ? index = i : null)
    
    answer = [arr[0], index]
    return answer;
}