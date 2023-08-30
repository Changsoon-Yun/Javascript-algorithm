function solution(arr, k) {
    const map = new Map();
    let answer = [];


    for (let i=0; i<arr.length; i++) {
        const item = arr[i];
        const keys = [...map.keys()];

        if (keys.length < k) map.set(item, map.get(item) ? map.get(item) + 1 : 1);
    }

    answer = [...map.keys()];

    while (answer.length < k) {
        answer.push(-1);
    }


    return answer;
}