/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 *
 * https://leetcode.cn/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (63.27%)
 * Likes:    1094
 * Dislikes: 0
 * Total Accepted:    400.5K
 * Total Submissions: 633.2K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
 *
 * 叶子节点 是指没有子节点的节点。
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
 * 输出：[[5,4,11,2],[5,8,4,5]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,3], targetSum = 5
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], targetSum = 0
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点总数在范围 [0, 5000] 内
 * -1000
 * -1000
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
var result = [];
var path = [];
var traversal = function (node, targetSum) {
  if (!node.left && !node.right && targetSum === 0) {
    result.push(path.slice(0));
    return;
  }
  if (!node.left && !node.right) return;

  if (node.left) {
    path.push(node.left.val);
    traversal(node.left, targetSum - node.left.val);
    path.pop();
  }
  if (node.right) {
    path.push(node.right.val);
    traversal(node.right, targetSum - node.right.val);
    path.pop();
  }
};
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  path.length = 0;
  result.length = 0;

  if (!root) return [];
  path.push(root.val);
  traversal(root, targetSum - root.val);
  return result;
};
// @lc code=end
