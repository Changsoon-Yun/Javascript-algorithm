import sys


total_computers = int(input())
connected_computers = int(input())

graph = [[] for i in range(total_computers + 1)]

visited = [0] * (total_computers + 1)

for i in range(connected_computers):
    a, b = map(int, input().split())
    graph[a] += [b]
    graph[b] += [a]

visited = [0] * (total_computers + 1)


def dfs(n):
    visited[n] = 1
    for num in graph[n]:
        if visited[num] == 0:
            dfs(num)

dfs(1)
print(sum(visited) - 1)
