import heapq
import sys

total, rep = input().split()
nums = input().split()

heap = []


def heappush(num):
    heapq.heappush(heap, num)


def heappop():
    return heapq.heappop(heap)


for i in range(len(nums)):
    heappush(int(nums[i]))

for i in range(int(rep)):
    a = heappop() + heappop()
    heappush(a)
    heappush(a)

answer = 0
for n in heap:
    answer += n

print(answer)
