function solution(s) {
    var answer = 0;
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arr2 = ['0','1','2','3','4','5','6','7','8','9']
    for (let i = 0; i < arr.length; i++) {
        const regex = new RegExp(`${arr[i]}`, 'g');
        s = s.replace(regex, arr2[i])
    }
    answer = Number(s)
    return answer;
}

solution("one4seveneight")//1478