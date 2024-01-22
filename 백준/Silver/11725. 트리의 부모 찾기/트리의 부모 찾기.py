import sys

t = int(input())

graph = [[] for i in range(t + 1)]

visited = [0] * (t + 1)

for i in range(t - 1):
    a, b = map(int, input().split())
    graph[a] += [b]
    graph[b] += [a]

q = [1]


visited[1] = 1

while q:
    parent = q.pop(0)
    for n in graph[parent]:
        if visited[n] == 0:
            visited[n] = parent
            q.append(n)


for num in visited[2::]:
    print(num)

