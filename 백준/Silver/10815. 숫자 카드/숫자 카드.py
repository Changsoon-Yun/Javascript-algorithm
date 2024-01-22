import sys


m = int(input())

arr = tuple(map(int, input().rstrip().split()))

n = int(input())
arr2 = tuple(map(int, input().rstrip().split()))

dic = {}

for i in range(len(arr2)):
    dic[arr2[i]] = 0

for i in range(len(arr)):
    if arr[i] in dic.keys():
        dic[arr[i]] += 1


print(*dic.values())