function solution(num_list) {
    let totalOperations = 0;

    for (let num of num_list) {
        while (num !== 1) {
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num -= 1;
                num /= 2;
            }
            totalOperations++;
        }
    }

    return totalOperations;
}