function solution(numbers) {
    let len = numbers.length;
    numbers.sort((a, b) => b - a);
    let multiple = numbers[0] * numbers[1];
    let multiple2 = numbers[len -1] * numbers[len -2];
    return Math.max(multiple, multiple2);
}