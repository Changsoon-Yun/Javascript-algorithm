function solution(str1, str2) {
    var answer = '';
    answer =  str1.split("").map((item,idx)=> {
        return item+str2[idx]
    }).join("")
    return answer;
}