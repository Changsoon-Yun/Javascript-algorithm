function solution(arr){
    // let answer, min=Number.MAX_SAFE_INTEGER;
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]<min) min=arr[i];
    // }
    // answer=min;
    // return answer;

    arr.sort((a,b)=> (a-b))

    return arr[0]

}

let arr=[5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));