import sys


while True:
    s = input()

    if s == '.':
        break

    pair = {
        ')': '(',
        ']': '[',
    }
    opener = "(["
    closer = ")]"

    stack = []
    brackets = []
    for char in s:
        if char in opener or char in closer:
            brackets.append(char)

    for char in brackets:
        if char in opener:
            stack.append(char)
        else:
            if not stack:
                print("no")
                break
            if stack:
                top = stack.pop()
                if pair[char] != top:
                    print("no")
                    break
    else:
        if stack:
            print("no")
        else:
            print("yes")
