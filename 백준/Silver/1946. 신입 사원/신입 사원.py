import sys


t = int(input())

for _ in range(t):
    total = int(input())
    arr = []

    for _ in range(total):
        arr.append(tuple(map(int, input().split())))

    arr.sort(key=lambda x: x[0])
    top = arr[0][1]
    ans = 1
    for i in range(total):
        if arr[i][1] < top:
            ans += 1
            top = arr[i][1]

    print(ans)
