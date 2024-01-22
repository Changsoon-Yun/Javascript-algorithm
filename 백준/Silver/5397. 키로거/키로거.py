import sys


total = int(sys.stdin.readline())

arr = [(sys.stdin.readline()) for _ in range(total)]


class ListNode:
    def __init__(self, val, next=None, prev=None):
        self.val = val
        self.next = next
        self.prev = prev


for password in arr:
    dummy = ListNode(None)
    head = dummy
    current = dummy
    for char in password:
        if char.isalnum():
            new_node = ListNode(char)
            if current.next:
                new_node.next = current.next
                current.next.prev = new_node
                current.next = new_node
            else:
                current.next = new_node
            new_node.prev = current
            current = new_node

        elif char == "<" and current.prev:
            current = current.prev

        elif char == ">" and current.next:
            current = current.next

        elif char == "-" and current.prev:
            if current.next is None:
                if current.prev:
                    current.prev.next = None
            elif current.next:
                current.prev.next = current.next
                current.next.prev = current.prev
            current = current.prev


    answer_list = []
    while head.next:
        answer_list.append(head.next.val)
        head = head.next
    answer = "".join(answer_list)
    print(answer)

