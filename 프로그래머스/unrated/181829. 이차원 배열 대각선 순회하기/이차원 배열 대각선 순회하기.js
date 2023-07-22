function solution(board, k) {
    var answer = 0;
    board.map((row,i)=> row.map((item,j)=> (j + i <= k ? answer = answer + item : null)))
    return answer;
}