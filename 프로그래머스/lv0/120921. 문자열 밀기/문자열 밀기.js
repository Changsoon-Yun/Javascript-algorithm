function solution(A, B) {
  var answer = 0;
  let arr = A.split("");
  let arr2 = B.split("");
  for (let i = 1; i <= arr.length; i++) {
    arr.unshift(arr.pop());
    if (A === B) {
      return 0;
    }
    if (arr.join("") == arr2.join("")) {
      return i;
    }
    if (i <= arr.length) {
      answer = -1;
    }
  }
  return answer;
}