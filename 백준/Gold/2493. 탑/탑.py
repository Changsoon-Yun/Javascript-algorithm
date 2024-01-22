import sys

t = int(input())
answer = [0 for i in range(int(t))]
stack = []
top = list(map(int,input().split()))

for i in range(t):
    while stack:
        if stack[-1][1] > top[i]:
            answer[i] = stack[-1][0] + 1
            break
        else:
            stack.pop()

    stack.append([i,top[i]])

print(*answer)