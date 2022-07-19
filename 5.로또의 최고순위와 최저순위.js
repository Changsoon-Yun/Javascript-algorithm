function solution(lottos, win_nums) {
    var answer = [];
    const high = []
    const low = [];
    for (let i = 0; i < lottos.length; i++) {
        if(lottos[i]===0) {
            high.push(lottos[i])
        }
        for (let j = 0; j < lottos.length; j++) {
            if(lottos[i] === win_nums[j]) {
                high.push(win_nums[j])
                low.push(win_nums[j])
            }
        }
    }

    switch (high.length) {
        case 6:
            answer.push(1);
            break
        case 5:
            answer.push(2)
            break
        case 4:
            answer.push(3)
            break
        case 3:
            answer.push(4)
            break
        case 2:
            answer.push(5)
            break
        case 1 || 0:
            answer.push(6)
            break
    }

    switch (low.length) {
        case 6:
            answer.push(1);
            break
        case 5:
            answer.push(2)
            break
        case 4:
            answer.push(3)
            break
        case 3:
            answer.push(4)
            break
        case 2:
            answer.push(5)
            break
        case 1 || 0:
            answer.push(6)
            break
    }

    console.log(answer.length)

    return answer;
}

solution(	[99, 99, 99, 99, 99, 99],  [31, 10, 45, 1, 6, 19])