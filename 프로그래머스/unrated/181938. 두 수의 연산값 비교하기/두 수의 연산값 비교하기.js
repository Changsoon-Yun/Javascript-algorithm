function solution(a, b) {
    var answer = 0;
    let aa = 2*a*b;
    let bb = Number(a.toString() + b)
    if(aa>bb) {
        return aa;
    } else if(aa<bb) {
        return bb
    } else if(aa===bb) {
        return bb
    }
    return answer;
}