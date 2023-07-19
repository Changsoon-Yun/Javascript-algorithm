function solution(num_list) {
    var answer = 0;
    let odd = num_list.filter((item,i)=>i % 2 !==0).reduce((prev,curr)=> prev+curr)
    let even = num_list.filter((item,i)=>i % 2 ===0).reduce((prev,curr)=> prev+curr)
    
    return odd > even ? odd : even
}