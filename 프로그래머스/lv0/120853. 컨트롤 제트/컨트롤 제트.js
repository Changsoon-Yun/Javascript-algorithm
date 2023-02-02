function solution(s) {
    var answer = 0;
    let arr = s.split(" ")    
    for(let i =0; i<arr.length; i++) {
        arr[i] == "Z" && arr.splice(i-1, 2) && i--;
    }
    if(arr.length == 0) return 0
    arr = arr.map((v)=>Number(v))
    answer = arr.reduce((prev,curr)=> prev+curr)
    return answer;
}