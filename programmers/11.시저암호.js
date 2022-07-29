function solution(s, n) {
    var answer = '';
    let letter = ''
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
        if(s[i]=== " ") {
            letter = s[i].charCodeAt(0)
        } else if(s[i].charCodeAt(0) + n > 122) {
            letter = s[i].charCodeAt(0) + n - 26
        }else if(s[i].charCodeAt(0) + n > 90 && s[i].charCodeAt(0) + n <97) {
            letter = s[i].charCodeAt(0) + n - 26
        }else if(s[i].charCodeAt(0) > 64 && s[i].charCodeAt(0) <97 && s[i].charCodeAt(0) + n >96) {
            letter = s[i].charCodeAt(0) + n - 26
        } else {
            letter = s[i].charCodeAt(0) + n
        }
        answer += (String.fromCharCode(letter))
    }
        console.log(answer)
    return answer;
}
solution("a Z y", 7)