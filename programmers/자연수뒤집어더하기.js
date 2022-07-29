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
