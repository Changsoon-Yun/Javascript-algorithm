import heapq

import sys

total = int(input())

arr = [int(input()) for _ in range(total)]
heap = []


def heappush(num):
    heapq.heappush(heap, num)


def heappop():
    result = heapq.heappop(heap)
    print(result)


for x in arr:
    if x == 0 and not heap:
        print(0)
    if x == 0 and heap:
        heappop()

    if x != 0:
        heappush(x)
