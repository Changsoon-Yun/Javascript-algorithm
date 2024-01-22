import sys

n = int(input())

input_list = [list(map(int, input().split())) for _ in range(n)]

edges = []

for i in range(n):
    for a in range(i + 1, n):
        edges.append((input_list[i][a], i, a))

edges.sort(key=lambda x: x[0])

parent = list(range(n + 1))


def find(n):
    if parent[n] != n:  # 노드 n의 부모노드가 자기 신이 아니라면
        parent[n] = find(parent[n])  # 노드 n의 부모노드 = 최상위 부모노드 탐색 재귀함수
    return parent[n]  # 현재 노드 n의 취상위 부모노드 return


def union(a, b):
    a = find(a)  # 노드 a의 최상위 노드 탐색
    b = find(b)  # 노드 b의 취상위 노드 탐색
    if a < b:  # a<b면
        parent[b] = a  # 노드b의 부모노드 a로 갱신
    else:
        parent[a] = b  # 노드a의 부모노드 b로 갱신


answer = 0

for price,a,b in edges:
    if find(a) != find(b):
        union(a,b)
        answer += price

print(answer)