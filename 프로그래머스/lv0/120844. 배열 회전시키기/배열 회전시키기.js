function solution(numbers, direction) {
  let a = 0;
  if (direction === "right") {
    a = numbers.pop();
    numbers.unshift(a);
  } else {
    a = numbers.shift();
    numbers.push(a);
  }
  return numbers;
}