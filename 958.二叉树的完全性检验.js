/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
 *
 * https://leetcode.cn/problems/check-completeness-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (54.78%)
 * Likes:    283
 * Dislikes: 0
 * Total Accepted:    55.8K
 * Total Submissions: 101.8K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * 给你一棵二叉树的根节点 root ，请你判断这棵树是否是一棵 完全二叉树 。
 *
 * 在一棵 完全二叉树 中，除了最后一层外，所有层都被完全填满，并且最后一层中的所有节点都尽可能靠左。最后一层（第 h 层）中可以包含 1 到 2^h
 * 个节点。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：root = [1,2,3,4,5,6]
 * 输出：true
 * 解释：最后一层前的每一层都是满的（即，节点值为 {1} 和 {2,3} 的两层），且最后一层中的所有节点（{4,5,6}）尽可能靠左。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：root = [1,2,3,4,5,null,7]
 * 输出：false
 * 解释：值为 7 的节点不满足条件「节点尽可能靠左」。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 100] 内
 * 1 <= Node.val <= 1000
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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  const q = [];
  root && q.push(root);

  let hasEmpty = false;

  while (q.length) {
    const len = q.length;

    for (let i = 0; i < len; i++) {
      const node = q.shift();

      // 遇到空节点
      if (!node) {
        hasEmpty = true;
        continue;
      }

      // 说明不是完全二叉树
      if (hasEmpty) {
        return false;
      }

      q.push(node.left);
      q.push(node.right);
    }
  }
  return true;
};
// @lc code=end
