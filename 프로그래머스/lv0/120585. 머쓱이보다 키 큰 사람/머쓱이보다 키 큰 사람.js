function solution(array, height) {
    var answer = 0;
    
    
    let result = array.filter((data)=> {
        return data > height
    })
    answer = result.length
    return answer;
}