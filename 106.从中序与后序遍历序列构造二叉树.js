/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (72.25%)
 * Likes:    1202
 * Dislikes: 0
 * Total Accepted:    367.2K
 * Total Submissions: 508.4K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * 给定两个整数数组 inorder 和 postorder ，其中 inorder 是二叉树的中序遍历， postorder
 * 是同一棵树的后序遍历，请你构造并返回这颗 二叉树 。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * 输出：[3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入：inorder = [-1], postorder = [-1]
 * 输出：[-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder 和 postorder 都由 不同 的值组成
 * postorder 中每一个值都在 inorder 中
 * inorder 保证是树的中序遍历
 * postorder 保证是树的后序遍历
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const walk = (inorder, postorder) => {
    if (postorder.length === 0) return null;

    // 获取 rootValue
    const rootValue = postorder[postorder.length - 1];
    const root = new TreeNode(rootValue);
    // 叶子节点，返回
    if (postorder.length === 1) return root;

    // 在中序数组中找到 root节点
    let index = 0;
    for (; index < inorder.length; index++) {
      if (inorder[index] === rootValue) break;
    }
    // 中序数组拆分左右区间
    const leftInOrder = inorder.slice(0, index);
    const rightInOrder = inorder.slice(index + 1);

    // 后序数组拆分左右区间
    const leftPostOrder = postorder.slice(0, index);
    const rightPostOrder = postorder.slice(index, -1);

    // 构建左右子树
    root.left = walk(leftInOrder, leftPostOrder);
    root.right = walk(rightInOrder, rightPostOrder);

    return root;
  };
  return walk(inorder, postorder);
};
// @lc code=end
