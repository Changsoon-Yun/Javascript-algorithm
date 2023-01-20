function solution(denum1, num1, denum2, num2) {
    let a = num1;
    let b = num2;
    
    // 유클리드 호제법. 최대공약수 구하기
    while(a % b !== 0){
        let r = a % b;
        
        if(r !== 0){
            a = b;
            b = r;
        }
    }
    
    // 최소공배수 = 두 자연수의 곱 / 최대공약수
    // 공통 분모가 될 수
    let min = (num1 * num2) / b;
    
    // 분모의 변경에 따른 분자 계산
    let quotient1 = min / num1;
    let quotient2 = min / num2;

    let newdenum1 = quotient1 * denum1;
    let newdenum2 = quotient2 * denum2;
    
    let newdenum = newdenum1 + newdenum2;
    
    // 기약 분수로 만들어주기
    // min과 newdenum의 최대공약수를 찾고, 각각을 최대공약수로 나눠주면 됨
    a = min;
    b = newdenum;
    
    // 유클리드 호제법. 최대공약수 구하기
    while(a % b !== 0){
        let r = a % b;
        
        if(r !== 0){
            a = b;
            b = r;
        }
    }

    let numerator = newdenum / b;
    let denominator = min / b;
    
    let ans = [];
    
    ans.push(numerator);
    ans.push(denominator);
    
    return ans;
}
