emailLength, findLength = input().split()

my_dict = {}
count = 0

while count < int(emailLength):
    for line in input().split("\n"):
        if line:
            email, password = line.split()
            my_dict[email] = password
            count += 1

find = [input() for i in range(int(findLength))]

for i in find:
    print(my_dict[i])