function solution(participant, completion) {
    var answer = '';
    participant=participant.sort()
    completion=completion.sort()
    for (let i = 0; i < completion.length; i++) {
        let a = participant.indexOf(completion[i])
        participant.splice(a, 1)
    }
    answer = participant.pop()
    console.log(answer)
    return answer;
}

console.log()

solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])