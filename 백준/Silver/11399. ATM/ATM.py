import sys


t = int(input())

p = sorted(list(map(int,input().split())))

ans = 0
ans_arr = []
for num in p:
    ans = num + ans
    ans_arr.append(ans)

print(sum(ans_arr))