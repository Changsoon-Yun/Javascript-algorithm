function solution(n) {
    let count = 0;
    // 연속한 자연수의 갯수를 i개라고 하면
    // n에서 '1부터 i까지의 합'을 뺀 수는 다시 m의 배수가 된다는 성질을 이용한다.
    // 자세한 증명은 https://spectrum-hero-335.notion.site/n-k-5f2d077383c94216a7807f6b81c87208
    for ( let i = 1 ; i < n/2 + 1 ; i++ ){
        // 1부터 i항까지의 합 sum
        const sum = i * (i + 1) / 2;
        // n에서 sum을 뺀 수는 다시 i의 배수가 되어야 한다.
        const sub = n - sum;
        if(sub < 0) break;
        if(sub % i === 0){
            count++;
        }
    }
    return count;
}