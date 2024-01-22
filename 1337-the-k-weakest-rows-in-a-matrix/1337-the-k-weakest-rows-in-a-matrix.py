class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        heap = []
        answer = []
        for i in range(len(mat)):
            heapq.heappush(heap, (sum(mat[i]), i))

        for j in range(k):
            answer.append(heapq.heappop(heap)[1])

        return answer
