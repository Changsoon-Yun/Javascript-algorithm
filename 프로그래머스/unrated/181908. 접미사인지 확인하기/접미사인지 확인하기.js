function solution(my_string, is_suffix) {
    console.log(my_string.slice(my_string.length-is_suffix.length,6))
    if(is_suffix.length > my_string.length) return 0
    return my_string.slice(my_string.length-is_suffix.length,my_string.length) === is_suffix ? 1 : 0
}