function solution(sides) {
  var answer = 0;
  let arr = sides.sort((a, b) => a - b);
  if (arr[2] >= arr[0] + arr[1]) {
    return 2;
  } else {
    return 1;
  }
}