/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode.cn/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (79.94%)
 * Likes:    1758
 * Dislikes: 0
 * Total Accepted:    793.9K
 * Total Submissions: 993K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：root = [2,1,3]
 * 输出：[2,3,1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：root = []
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目范围在 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// var invertTree = function(root) {
//   if (root === null) return root
//   swap(root, root.left, root.right) // 前序
//   invertTree(root.left)
//   invertTree(root.right)
//   // swap(root, root.left, root.right) // 后序

//   // 中序
//   // invertTree(root.left)
//   // swap(root, root.left, root.right)
//   // invertTree(root.left)

//   return root
// };
// 层序遍历
var invertTree = function(root) {
  if (root === null) return null
  const queue = [root]
  while(queue.length) {
    const len = queue.length
    for(let i = 0; i < len; i++) {
      const node = queue.shift()
      swap(node, node.left, node.right)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return root
};
var swap = (node, left, right) => {
  const temp = left
  node.left = right
  node.right = temp
}
// @lc code=end

