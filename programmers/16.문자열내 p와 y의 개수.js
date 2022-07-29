function solution(s){
    let answer = s.toLowerCase()
    let plength = answer.match(/p/g) //숫자
    let ylength = answer.match(/y/g) // 숫자
    if(plength === null) {
        plength = 0
    }
    if (ylength === null) {
        ylength = 0
    }

    answer = plength.length === ylength.length;
    return answer;
}

solution('')