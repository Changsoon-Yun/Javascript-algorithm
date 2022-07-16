function solution(price, money, count) {
    var answer = -1;
    let start = 0
    for (let i = 1 ; i <= count; i++) {
        start += price*i
    }
    if( start <= money ) {
        answer = 0
    } else if (start > money) {
        answer = start - money
    }
    console.log(answer)
    return answer;
}

solution(3, 20, 4)