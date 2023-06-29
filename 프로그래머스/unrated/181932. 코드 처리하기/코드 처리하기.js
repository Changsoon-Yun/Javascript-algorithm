function solution(code) {

    let mode = 0
    let word = code.split("")
    let answer = ""
    
    for(let i = 0; i<word.length; i++) {
        
        if(mode === 0) {

            if(word[i] !=="1") {
                if(i%2===0) {
                    answer = answer+word[i]

                }
            } 
                        if(word[i]==="1") {
                mode = 1
            }  
        } else if(mode===1) {

            if(word[i] !=="1") {
                if(i%2===1) {
                    answer = answer+word[i]
                }
            } 
                        if(word[i]==="1") {
                mode = 0
            }   
        }
                
    }
    
    if(answer ==="") return "EMPTY"
    
    return answer
}

