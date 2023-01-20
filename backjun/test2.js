function solution(A, B) {
  var answer = 0;

  A.sort((a, b) => {
    return a - b;
  });

  B.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[B.length - 1 - i];
  }

  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
