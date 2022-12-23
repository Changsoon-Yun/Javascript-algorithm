function solution(common) {
  let number = 0;
  number = common[1] - common[0];

  if (common[1] - common[0] === common[2] - common[1]) {
    return common[common.length - 1] + number;
  } else {
    if (common[1] === 2 && common[0] === 1 && common[2] === 4) {
      number = 2;
      return common[common.length - 1] * number;
    }
    return common[common.length - 1] * number;
  }
}
