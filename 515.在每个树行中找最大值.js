/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 *
 * https://leetcode.cn/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (66.39%)
 * Likes:    353
 * Dislikes: 0
 * Total Accepted:    139.2K
 * Total Submissions: 209.7K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * 给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。
 * 
 * 
 * 
 * 示例1：
 * 
 * 
 * 
 * 
 * 输入: root = [1,3,2,5,3,null,9]
 * 输出: [1,3,9]
 * 
 * 
 * 示例2：
 * 
 * 
 * 输入: root = [1,2,3]
 * 输出: [1,3]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 二叉树的节点个数的范围是 [0,10^4]
 * -2^31 <= Node.val <= 2^31 - 1
 * 
 * 
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
 * @return {number[]}
 */
var largestValues = function(root) {
  const res = []
  const queue = []

  root && queue.push(root)

  while(queue.length) {
    const len = queue.length
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node.val > max) {
        max = node.val
      }

      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    
    res.push(max)
  }

  return res
};
// @lc code=end

