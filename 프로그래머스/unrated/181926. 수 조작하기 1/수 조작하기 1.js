function solution(n, control) {
    var answer = n;
    control.split("").map((item)=> (
        answer = answer + move(item)
    ))
    return answer;
}

function move(item) {
    let v
    if (item === "w") {
        v = 1
    }
    
    if (item === "s") {
        v = -1
    }
    
    if (item === "d") {
        v = 10
    }
    
    if (item === "a") {
        v = -10
    }
    
    
    return v
    
}