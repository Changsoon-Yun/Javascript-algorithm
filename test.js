function solution(board) {
    let answer = 0;
    let location = []
    const length = board[0].length

    if (board[0][0] === 1) {
        return answer = 0
    }

    board.map((row, i) => {
        return row.map((item, j) => {
            if (item !== 0) {
                location.push([i, j])
            }
        })
    })


    location.map(bomb => {


        if (bomb[0] === 0) {
            board[bomb[0]][bomb[1] - 1]++
            board[bomb[0]][bomb[1] + 1]++

            board[bomb[0] + 1][bomb[1] - 1]++
            board[bomb[0] + 1][bomb[1]]++
            board[bomb[0] + 1][bomb[1] + 1]++
            return;
        }

        if (bomb[0] === length - 1) {
            board[bomb[0] - 1][bomb[1] - 1]++
            board[bomb[0] - 1][bomb[1]]++
            board[bomb[0] - 1][bomb[1] + 1]++

            board[bomb[0]][bomb[1] - 1]++
            board[bomb[0]][bomb[1] + 1]++

            return
        }


        board[bomb[0] - 1][bomb[1] - 1]++
        board[bomb[0] - 1][bomb[1]]++
        board[bomb[0] - 1][bomb[1] + 1]++

        board[bomb[0]][bomb[1] - 1]++
        board[bomb[0]][bomb[1] + 1]++

        board[bomb[0] + 1][bomb[1] - 1]++
        board[bomb[0] + 1][bomb[1]]++
        board[bomb[0] + 1][bomb[1] + 1]++

    })

    board.map((row, i) => {
        return row.map((item, j) => {
            if (item === 0) {
                answer++
            }
        })
    })


    return answer;
}

solution([[0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0]])