function solution(x1, x2, x3, x4) {
    var answer = true;
    
    function foo (a,b){    
        if(a ===false && b===false) {
            return false
        }
        return true
    }
    
    function bar (a,b) {
        if(a ===true && b===true) {
            return true
        }
        return false
    }
    
    return bar(foo(x1,x2),foo(x3,x4))
}