function solution(numbers)  {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    console.log(answer)1
    answer = [...new Set(answer)].sort((a,b)=> {return a-b})
    console.log(answer)
    return answer
}

solution([2,1,3,4,1])