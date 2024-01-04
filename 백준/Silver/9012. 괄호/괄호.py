t = int(input())

for i in range(t):
    line = list(input())
    stack = []

    for j in range(len(line)):
        if line[j] == "(":
            stack.append(line[j])
        elif line[j] == ")":
            if stack:
                stack.pop()
            else:
                print("NO")
                break

    else:
        if not stack:
            print("YES")
        else:
            print("NO")


