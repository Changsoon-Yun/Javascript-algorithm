function solution(numbers) {
    let answer = 0;
    let numbersPlus = 0
    numbers.forEach((a) => {
       numbersPlus += a
    })
    answer = 45 - numbersPlus
    console.log(answer)
    return answer;
}

solution([1])