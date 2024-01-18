import heapq

import sys

input = sys.stdin.readline

t = int(input())

classes = [list(map(int, input().split())) for _ in range(t)]

classes.sort(key=lambda x: x[0])

heap = []

heapq.heappush(heap, classes[0][1])

for i in range(1, len(classes)):
    if classes[i][0] < heap[0]:
        heapq.heappush(heap, classes[i][1])
    else:
        heapq.heappop(heap)
        heapq.heappush(heap, classes[i][1])

print(len(heap))
