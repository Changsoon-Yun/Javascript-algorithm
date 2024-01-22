class Solution:
    def numJewelsInStones(self, j: str, s: str) -> int:
        freqs = {}
        count = 0

        for char in s:
            if char not in freqs:
                freqs[char] = 1
            else:
                freqs[char] += 1

        for char in j:
            if char in freqs:
                count += freqs[char]

        return count
        