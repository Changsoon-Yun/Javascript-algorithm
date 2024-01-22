import sys

t = int(input())
grid = []

for _ in range(t):
    line = list(input())
    grid.append(line)

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]
rows, cols = len(grid), len(grid[0])
cnt = 0
count_arr = []
for row in range(rows):
    for col in range(cols):
        count = set()
        if grid[row][col] != '1':
            continue

        cnt += 1
        stack = [(row, col)]

        while stack:
            x, y = stack.pop()
            grid[x][y] = '0'
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                if nx < 0 or nx >= rows or ny < 0 or ny >= cols or grid[nx][ny] != '1':
                    continue
                stack.append((nx, ny))
                count.add((nx,ny))
        count_arr.append(len(count) + 1)


print(cnt)
count_arr.sort()
for num in count_arr:
    print(num)
