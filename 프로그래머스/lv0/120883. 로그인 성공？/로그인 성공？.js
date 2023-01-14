function solution(id_pw, db) {
    let ans = ""
    for(i=0;i<db.length;i++) {
            var answer = [];
        for(j=0;j<id_pw.length;j++) {
            if(id_pw[j] === db[i][j]) {
                answer.push(true)
            } else {
                answer.push(false)
            }
        }
        if(answer[0] === false && answer[1] === false) {
            ans = "fail"
        } else if(answer[0] === true && answer[1] === false) {
            ans = "wrong pw"
        } else if(answer[0] === true && answer[1] === true) {
            ans = "login"
        }
    }
    return ans;
}