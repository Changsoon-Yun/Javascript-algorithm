function solution(my_string, m, c) {
    let answer = "";
    var arr1 = [];
    let arr2 = [];
    
    for(let i = 0; i<my_string.length; i++) {
        arr2.push(my_string[i])
        if(arr2.length === m) {
            arr1.push(arr2)
            arr2 = []
        }
    }
    
    arr1.map((item,idx)=> (
     answer = answer + item[c - 1]
    ))
    return answer;
}