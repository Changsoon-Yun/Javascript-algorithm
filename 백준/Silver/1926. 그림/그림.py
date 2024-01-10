import sys

rows, cols = map(int, input().split())
grid = []

for _ in range(rows):
    grid.append(list(map(int, input().split())))

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

count = 0
count_arr = []
for row in range(rows):
    for col in range(cols):
        temp = set()

        if grid[row][col] != 1:
            continue

        stack = [(row, col)]

        count += 1
        while stack:
            x, y = stack.pop()
            grid[x][y] = 0
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if nx < 0 or nx >= rows or ny < 0 or ny >= cols or grid[nx][ny] != 1:
                    continue
                stack.append((nx, ny))
                temp.add((nx, ny))
        count_arr.append(len(temp) + 1)
print(count)
if count_arr:
    print(max(count_arr))
else:
    print(0)
