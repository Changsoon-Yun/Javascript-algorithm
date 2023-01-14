function solution(before, after) {
    var answer = 0;
    before = before.split("").sort()
    after = after.split("").sort()
    JSON.stringify(before) === JSON.stringify(after) ? answer = 1 : answer = 0
    return answer;
}