function solution(a, b) {
    var answer = 0;
    // let aa = toString(a) + toString(b)
    let aa = a.toString() + b.toString()
    let bb = b.toString() + a.toString()
    return aa > bb ? +aa : +bb
}