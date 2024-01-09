from collections import deque

import sys

total = int(input())
enter = [(input()) for _ in range(total)]
exit = [(input()) for _ in range(total)]

enterQue = deque()
for i in range(len(enter)):
    enterQue.append(enter[i])

answer = 0
for j in range(len(exit)):
    if exit[j] != enterQue[0]:
        enterQue.remove(exit[j])
        answer += 1
    else:
        enterQue.popleft()

print(answer)