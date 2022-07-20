function solution(s) {
    // let answer2 = s.match(/[a-zA-Z]/g)
    // let small = []
    // let big = []
    // for (let i = 0; i < answer2.length; i++) {
    //     if(answer2[i] === answer2[i].toUpperCase()) {
    //         big.push(answer2[i])
    //     } else {
    //         small.push(answer2[i])
    //     }
    // }
    //
    // big = big.sort((a, b) => {
    //     if(a < b) return 1;
    //     if(a > b) return -1;
    //     if(a === b) return 0;
    //     else return 1;
    // })
    // small = small.sort((a,b)=> {
    //     if(a < b) return 1
    //     if(a > b) return -1
    //     if(a === b) return 0
    //     else return 1
    // })
    // console.log(small)
    //
    // for (let i = 0; i < big.length; i++) {
    //     small.push(big[i])
    // }
    //
    //
    // return small.join('');
    return s.split('').sort().reverse().join('')
}
solution("SDADfdafsdv")