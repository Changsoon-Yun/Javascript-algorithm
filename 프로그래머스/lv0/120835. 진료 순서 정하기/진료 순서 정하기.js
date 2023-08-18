function solution(emergency) {
    let sortedArr = [...emergency].sort((a,b)=>b-a)
    
    return emergency.map(item=> (
        sortedArr.indexOf(item) + 1
    ))
}