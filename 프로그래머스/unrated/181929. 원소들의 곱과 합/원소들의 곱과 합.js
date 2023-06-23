function solution(num_list) {
    const a = num_list.reduce((prev,next)=> prev+next)
    const b = num_list.reduce((prev,next)=>prev*next)
    
    return (a*a)>b? 1 : 0

}