import sys


t = int(input())

roads = list(map(int, input().split()))

stations = list(map(int, input().split()))
stations.pop()

minimum = min(stations)

price = 0
for i in range(len(stations)):
    if stations[i] != minimum:
        price += stations[i] * roads[i]
    else:
        price += stations[i] * sum(roads[i:])
        break

print(price)
