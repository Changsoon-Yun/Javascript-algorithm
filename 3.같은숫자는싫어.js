function solution(arr)  {
    var answer = [];

    answer = arr.filter((element, index)=> {
        return element !== arr[index + 1]
    })

    console.log(answer)

    return answer
}

solution([4,4,4,3,3])