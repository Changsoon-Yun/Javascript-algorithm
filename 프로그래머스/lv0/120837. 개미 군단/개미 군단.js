function solution(hp) {
    const generalAntPower = 5;
    const soldierAntPower = 3;
    const workerAntPower = 1;
    
    let generals = Math.floor(hp / generalAntPower);  // 장군개미 수
    let soldiers = 0;  // 병정개미 수
    let workers = 0;  // 일개미 수
    
    // 장군개미를 최대한 사용하고 남은 체력에 따라 병정개미와 일개미를 할당
    const remainingHp = hp % generalAntPower;
    if (remainingHp >= soldierAntPower) {
        soldiers = 1;
        workers = remainingHp - soldierAntPower;
    } else {
        workers = remainingHp;
    }
    
    return generals + soldiers + workers;
}