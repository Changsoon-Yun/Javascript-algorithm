function solution(number) {
    return [...number].reduce((acc, cur) => {
        acc += parseInt(cur, 10);
        acc %= 9;

        return acc;
    }, 0);
}