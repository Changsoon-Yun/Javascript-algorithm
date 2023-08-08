function solution(myString) {
    var answer = '';
    answer = myString.split("").map((item)=> (
        item === "a" ? item.toUpperCase() : isUpperCase(item) ? item : item.toLowerCase()
    )).join("")
    return answer;
}

function isUpperCase(str) {
  return str === "A";
}