function solution(a, b) {
    let answer = 0;
    let original = [a, b]
    let copy = JSON.parse(JSON.stringify(original)) // 딥카피로 복사
    let result = []
    if(a === b){ // a와 b가 같을때
        answer = a
        return answer
    } else if (a > b) { //a가 b보다 클때
        result.push(a) //a를 먼저 result 배열에 저장
        for (let i = 0; i < a-b; i++) { //a-b의 값만큼 반복
            let numA = --copy[0]// copy[0]==a이므로 a의 값에서 -1씩 빼며 numA에 저장
            result.push(numA) //저장된 numA를 result배열에 저장
        }

        result.forEach( (c)=> { //result배열의 하나하나의 값을 반복하여 answer에 더함
            answer += c
        })
        return answer //answer값을 리턴
    } else if (a < b) {
        result.push(a)

        for (let i = 0; i < b-a; i++) {
            let numA = ++copy[0]
            result.push(numA)
        }

        result.forEach( (c)=> {
            answer += c
        })
        return answer
    }
}



function solution(a, b){ //짧고 깔끔한 코드 (생각치못했음)
    let s = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        s += i;
    }
    console.log(s)
    return s;
}

solution(5, 3)