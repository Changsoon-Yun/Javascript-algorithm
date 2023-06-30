function solution(todo_list, finished) {
    var answer = [];
   return todo_list.filter((item,idx)=> {
        return finished[idx]===false && item
    })
    
}