function solution(arr) {
    var answer = [];
    
    return arr.map(item=> {
        // 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 
       return item >= 50 && item % 2 === 0 ? item /2 : item < 50 && item % 2 === 1 ? item *2 : item
    })
}