function solution(a, b) {
    let answer = 0;
    let original = [a, b]
    let copy = JSON.parse(JSON.stringify(original))
    let result = []
    if(a === b){
        answer = a
        return answer
    } else if (a > b) {
        result.push(a)
        for (let i = 0; i < a-b; i++) {
            let numA = --copy[0]
            result.push(numA)
        }
        result.forEach( (c)=> {
            answer += c
        })
        return answer
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

// function adder(a, b){
//     let s = 0;
//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//         s += i;
//     }
//     console.log(s)
//     return s;
// }

solution(-5, 5)