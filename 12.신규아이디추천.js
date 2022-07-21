function solution(new_id) {
    var answer = '';
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi;
    let id = new_id.toLowerCase().replace(reg, '').split('')
    for (let i = 0; i < id.length; i++) {
        if(id[i]=== '.' && id[i+1]==='.'){
            id.splice(i,1)
            i--
        }
    }
    for (let i = 0; i < id.length; i++) {
        if(id[0]==='.') {
            id.shift()
        }
        if(id[id.length - 1] === '.') {
            id.pop()
        }
    }
    if(id.length===0) {
        id.push('a')
    }
    for (let i = 0; i < id.length; i++) {
        if(id.length >= 15 && i>=15) {
            id.splice(i,1)
            i--
        }
        if(id[id.length - 1] === '.') {
            id.pop()
        }
        if(id.length<=2) {
            id.push(id[id.length-1])
        }
    }
    id = id.join('')
    console.log(id)
    answer = id
    return answer;
}

solution("z-+.^.\"")