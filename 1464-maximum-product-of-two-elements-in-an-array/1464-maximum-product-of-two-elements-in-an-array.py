class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap,(-num,num))
        
        
        num1 = heapq.heappop(heap)[1]
        num2 = heapq.heappop(heap)[1]
        
        return ((num1 -1)*(num2 -1))