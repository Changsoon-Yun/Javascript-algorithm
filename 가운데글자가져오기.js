function solution(s) {
  count = s.length
  if(count === 1) {
    let answer = s
    console.log(answer)
    return answer
  } else if(count ===2) {
    let answer = s
    console.log(answer)
    return answer
  }else if(count%2 === 0) {
    let cutNumber = ((count-2)/2)
    let answer = s.slice(cutNumber, -cutNumber)
    console.log(answer)
    return answer
  }else if(count%2 === 1) {
    let cutNumber2 = ((count-1)/2)
    let answer = s.slice(cutNumber2, -cutNumber2)
    console.log(answer)
    return answer
  }
}

solution('테스트텍스트')