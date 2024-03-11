/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (59.58%)
 * Likes:    2630
 * Dislikes: 0
 * Total Accepted:    960.7K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 * 
 * 
 * 
 * 
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
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
 * @return {boolean}
 */
var compare = function(left, right) {
  // 处理有空的情况
  if (left === null || right === null) {
    if(left === null && right === null) return true
    return false
  }
  // 值不同
  if (left.val !== right.val) return false

  // 值相同
  const outside = compare(left.left, right.right)
  const inside = compare(left.right, right.left)
  const isSame = inside && outside
  return isSame
}
// var isSymmetric = function(root) {
//   if(root === null) return true
//   return compare(root.left, root.right)
// };
// 迭代
var isSymmetric = function(root) {
  if (root === null) return true
  const queue = [root.left, root.right]
  while(queue.length) {
    const left = queue.shift()
    const right = queue.shift()

    if (left === null && right === null) continue
    if (left === null || right === null || (left.val !== right.val)) return false

    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }
  return true
}
// @lc code=end

