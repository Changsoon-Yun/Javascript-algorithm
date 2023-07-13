function solution(n_str) {
    let startIdx = 0;
    while(n_str[startIdx]==="0") {
        startIdx++
    }
    return n_str.substring(startIdx)
    
}