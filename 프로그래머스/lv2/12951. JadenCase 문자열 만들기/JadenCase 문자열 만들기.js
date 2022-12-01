function solution(s) {
    var answer = '';
    let sentence = s.split(" ")

    let lower = sentence.map((s)=> s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    
    answer = lower.join(" ")
    return answer;
}