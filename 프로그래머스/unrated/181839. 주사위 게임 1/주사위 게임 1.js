function solution(a, b) {
    var answer = 0;
    let aa = a%2===0;
    let bb = b%2===0;
    
    if( aa ===false  && bb  === false) {
        return a*a + b*b
    } else if ( aa !== bb ) {
        return 2 * (a+b)
    } else if (aa === true  && bb === true) {
        return  Math.abs(a-b)
    }
}