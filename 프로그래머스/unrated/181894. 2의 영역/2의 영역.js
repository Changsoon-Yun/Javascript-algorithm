function solution(arr) {
    const indices = arr.reduce((acc, cur, idx) => {
        if (cur === 2) {
            acc.push(idx)
        }

        return acc;
    }, [])
    const answer = arr.slice(indices[0], indices[indices.length - 1] + 1);

    return answer.length ? answer : [-1];
}