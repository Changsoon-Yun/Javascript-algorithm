function solution(nums) {
    let answer = 0;
    const lengh = nums.length
    for (let i = 0; i < lengh; i++) {
        for (let j = i + 1; j < lengh; j++) {
            for (let k = j + 1; k < lengh; k++) {
                const sum = (nums[i] + nums[j] + nums[k])
                if (isPrime(sum)) answer += 1;
            }
        }
    }
    return answer;
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num >= 2;
}