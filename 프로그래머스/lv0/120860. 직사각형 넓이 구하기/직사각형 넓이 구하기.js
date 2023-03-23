function solution(dots) {
    var answer = 0;
    let X = dots.map(dot=>dot[0]).sort((a,b)=>b-a)
    let Y = dots.map(dot=>dot[1]).sort((a,b)=>b-a)
    console.log()
    let bigX = X[0]
    let smallX = X[3]
    let bigY = Y[0]
    let smallY = Y[3]
    
    answer = ((bigX - smallX) * (bigY - smallY))
    return answer;
}