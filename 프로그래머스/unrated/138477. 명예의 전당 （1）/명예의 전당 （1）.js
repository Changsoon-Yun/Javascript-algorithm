function solution(k, score) {
  var answer = [];
  let honorArr = [];
  
  score.map((data)=> {
    if(honorArr.length < k) {
      honorArr.push(data)
      answer.push(Math.min(...honorArr));
      return
    }
    if(honorArr.length === k && Math.min(...honorArr) < data) {      
      honorArr.push(data)
      honorArr.splice(honorArr.indexOf(Math.min(...honorArr)), 1)
    }
    answer.push(Math.min(...honorArr));
  })
    
    return answer
}