function solution(n) {
  var answer = 0;
  let num2 = n.toString(2)

  let originCount = 0;
  
  for (let i = 0; i < num2.length; i++) {
    if(num2[i] === "1") {
      originCount++
    }
  }

  function nPlus(num33) {
    let nextCount = 0;
    let num22 = num33.toString(2)

    for (let i = 0; i < num22.length; i++) {
      if(num22[i] === "1") {
        nextCount++
      }
    }

    if( originCount !== nextCount) {
      nPlus(num33+1)
    } else {
      return answer = num33
    }
  }

  nPlus(n + 1)

    return answer
}