function solution(n) {
    let result = 0;
    let str = n.toString()
    for (let i = 0; i < str.length; i++) {
        result += Number(str[i])
    }
    str = str.split('').reverse().join('+')
    result = str + '=' + result
    return result;
}

console.log(solution(718253))


// function solution(n) {
//     let sum = 0;
//     let list = String(n).split("").reverse().join('+')
//     n = String(n)
//     for (let i = 0; i < n.length; i++) {
//         sum += parseInt(n[i])
//     }
//     return console.log(`"${list}=${sum}"`)
// }
// solution(718253)