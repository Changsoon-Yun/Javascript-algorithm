# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    totalNum = 0

    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:        
        def dfs(root):
            if not root:
                return 0
            
            current_val = 0
            if low <= root.val <= high:
                current_val = root.val
            
            left_sum = dfs(root.left)
            right_sum = dfs(root.right)
            
            return current_val + left_sum + right_sum
        
        return dfs(root)