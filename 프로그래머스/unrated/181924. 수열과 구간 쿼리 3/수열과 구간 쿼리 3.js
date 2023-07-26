function solution(arr, queries) {
    
    for(let i = 0; i < queries.length; i++) {
        let a= arr[queries[i][0]]
        arr[queries[i][0]] =  arr[queries[i][1]]
        arr[queries[i][1]] =  a
    }
    return arr;
}