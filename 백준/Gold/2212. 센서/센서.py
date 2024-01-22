import sys

t = int(input())
k = int(input())

sensor = list(map(int, input().split()))

sensor.sort()
arr = []

for i in range(t - 1):
    arr.append(sensor[i + 1] - sensor[i])

arr.sort(reverse=True)

print(sum(arr[k - 1:]))
