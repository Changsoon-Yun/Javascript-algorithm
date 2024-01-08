def solution(t, p):
    answer = 0
    pointer = 0
    arr = []
    while pointer + len(p) <= len(t):
        arr.append(t[pointer:pointer + len(p)])
        pointer += 1
        
    for num in arr:
        if num <= p:
            answer+=1
            
    return answer