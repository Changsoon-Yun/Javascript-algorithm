import sys


t = int(sys.stdin.readline())

nums = [1, 2, 3]


def backtracking(target):
    global answer
    if sum(stack) == target:
        answer += 1
        return
    if sum(stack) > target:
        return
    for num in nums:
        if sum(stack) + num <= target:
            stack.append(num)
            backtracking(target)
            stack.pop()


for _ in range(t):
    stack = []
    answer = 0

    backtracking(int(input()))
    print(answer)
