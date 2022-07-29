function solution(arr1, arr2, signs){
    let answer=[[]];
    for (let i = 0; i < signs.length; i++) {
        for (let j = 0; j < signs[i].length; j++) {
            if(signs[i][j]===false) {
                arr1[i][j]= -arr1[i][j]
                arr2[i][j]= -arr2[i][j]
            }
        }
    }
    console.log(arr1)
    return answer;
}
let arr1=[[5,7,1],[2,3,5]];
let arr2=[[5,1,6],[7,5,6]];
let signs=[[true,true,false],[false,true,false]];
solution(arr1, arr2, signs)