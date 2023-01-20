function solution(cipher, code) {
    var answer = '';
    cipher.split("")
    for(i=0;i<= cipher.length; i++) {
        if(i*code <= cipher.length && i!=0) {
                 answer += cipher[i*code -1]   
        }
    }
    return answer;
}