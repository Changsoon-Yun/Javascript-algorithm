from operator import itemgetter

import sys


t = int(input())

arr = [input().split() for i in range(t)]

for i in range(len(arr)):
    arr[i][0] = int(arr[i][0])

arr2 = sorted(arr, key=itemgetter(0))

for info in arr2:
    print(str(info[0]) + " " + info[1])
