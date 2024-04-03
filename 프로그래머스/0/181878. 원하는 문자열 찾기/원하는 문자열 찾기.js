function solution(myString, pat) {
    let str = myString.toLowerCase()
    let part = pat.toLowerCase()
    return str.includes(part) ? 1 : 0;
}