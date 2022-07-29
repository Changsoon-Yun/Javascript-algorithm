function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let arr3 = []
        for (let j = 0; j < arr1[i].length; j++) {
            arr3.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(arr3)
    }
    console.log(answer)
    return answer;
}

solution([[1,2],[2,3]], [[3,4],[5,6]])