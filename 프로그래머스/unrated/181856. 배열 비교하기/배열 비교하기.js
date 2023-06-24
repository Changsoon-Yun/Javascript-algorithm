function solution(arr1, arr2) {
    if(arr1.length > arr2.length) {
        return 1
    } else if(arr1.length < arr2.length) {
        return -1
    }else if(arr1.length = arr2.length) {
     if(arr1.reduce((a,i)=>a+i) > arr2.reduce((a,i)=>a+i)) {
         return 1
     } else if (arr1.reduce((a,i)=>a+i) < arr2.reduce((a,i)=>a+i)) {
         return -1
     }
    return 0
    }
}