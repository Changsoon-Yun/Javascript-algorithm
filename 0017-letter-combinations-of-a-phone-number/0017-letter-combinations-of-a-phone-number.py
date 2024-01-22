class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if digits == "":
            return []
        counter = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
        }
        output = [""]

        for nums in digits:
            temp = []
            for char in counter[nums]:
                for o in output:
                    temp.append(o+char)
            output = temp
        return output