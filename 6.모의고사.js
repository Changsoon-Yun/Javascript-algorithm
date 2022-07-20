function solution(answers) {
    let answer = []
    // 수포자들의 반복되는 규칙의 수를 배열로 저장
    let supo1 = [1,2,3,4,5];
    let supo2 = [2,1,2,3,2,4,2,5];
    let supo3 = [3,3,1,1,2,2,4,4,5,5];

    let ans1 = answers.filter((a,i)=> a === supo1[i%supo1.length]).length
    let ans2 = answers.filter((a,i)=> a === supo2[i%supo2.length]).length
    let ans3 = answers.filter((a,i)=> a === supo3[i%supo3.length]).length


    let max = Math.max(ans1, ans2 ,ans3)
    if(ans1 === max) answer.push(1);
    if(ans2 === max) answer.push(2);
    if(ans3 === max) answer.push(3);

    return answer
}

solution([1,3,2,4,2])