function solution(my_string, num1, num2) {
  var answer = "";
  let arr = my_string.split("");
  let changed = arr[num1];

  arr[num1] = arr[num2];
  arr[num2] = changed;

  return arr.join("");
}