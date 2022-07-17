function solution(s) {
    var word = s.split(' ');
    let answer = [];
    for (let i = 0; i < word.length; i++) {
        // answer.push(x[i].split('').map((cur, j) => j % 2 ? cur.toLowerCase() : cur.toUpperCase()).join(''));
        answer.push(word[i].split('').map((cur, j) =>
        j % 2
        ? cur.toLowerCase()
        : cur.toUpperCase()
        ).join(' '))
    }
    return answer.join(" ");
}

solution("try hello world")