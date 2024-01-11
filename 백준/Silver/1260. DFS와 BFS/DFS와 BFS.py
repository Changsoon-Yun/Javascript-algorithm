import sys


dot, line, start = map(int, input().split())

graph = [[] for i in range(dot + 1)]

for i in range(line):
    a, b = map(int, input().split())
    graph[a] += [b]
    graph[b] += [a]

visited = [0] * (dot + 1)

dfs_answer = []

for i, line in enumerate(graph):
    line.sort()


def dfs(n):
    print(n, end=" ")
    visited[n] = 1
    for num in graph[n]:
        if visited[num] == 0:
            dfs(num)


dfs(start)
print()

visited = [0] * (dot + 1)
q = [start]
visited[start] = 1


def bfs():
    while q:
        cur = q.pop(0)
        print(cur, end=" ")
        for num in graph[cur]:
            if not visited[num]:
                visited[num] = 1
                q.append(num)


bfs()


