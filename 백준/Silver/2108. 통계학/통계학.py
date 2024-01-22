import collections

import sys

input = sys.stdin.readline

t = int(input())

arr = []
for _ in range(t):
    arr.append(int(input()))

arr.sort()

avg = round(sum(arr) / t)
center = arr[len(arr) // 2]
mode = collections.Counter(arr)
ran = int(arr[t - 1]) - int(arr[0])

if len(mode.most_common(2)) > 1:
    if mode.most_common(2)[0][1] == mode.most_common(2)[1][1]:
        mode = mode.most_common(2)[1][0]
    else:
        mode = mode.most_common(2)[0][0]
else:
    mode = mode.most_common(2)[0][0]


print(avg)
print(center)
print(mode)
print(ran)
