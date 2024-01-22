import sys


length, charLength = input().split()
inputWord = "".join(sorted(input().split()))

answer = []
answer_arr = []


def backtracking(cnt, idx):
    global answer
    if len(answer) == int(length) and check("".join(answer)):
        answer_arr.append("".join(answer))
        return
    for i in range(idx, int(charLength)):
        answer.append(inputWord[i])
        backtracking(cnt + 1, i + 1)
        answer.pop()


def check(word):
    vowel = 0
    consonant = 0
    for char in word:
        if char in "aeiou":
            vowel += 1
        else:
            consonant += 1

    if vowel > 0 and consonant > 1:
        print(word)
        return True
    else:
        return False


backtracking(0, 0)
