/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (71.53%)
 * Likes:    2265
 * Dislikes: 0
 * Total Accepted:    621.7K
 * Total Submissions: 869K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder
 * 是同一棵树的中序遍历，请构造二叉树并返回其根节点。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * 输出: [3,9,20,null,null,15,7]
 *
 *
 * 示例 2:
 *
 *
 * 输入: preorder = [-1], inorder = [-1]
 * 输出: [-1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder 和 inorder 均 无重复 元素
 * inorder 均出现在 preorder
 * preorder 保证 为二叉树的前序遍历序列
 * inorder 保证 为二叉树的中序遍历序列
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const walk = (preorder, inorder) => {
    if (preorder.length === 0) return null;

    // 获取 rootValue
    const rootValue = preorder[0];
    const root = new TreeNode(rootValue);
    if (preorder.length === 1) return root;

    // 在中序数组中找到 rootValue
    let index = 0;
    for (; index < inorder.length; index++) {
      if (inorder[index] === rootValue) break;
    }

    // 中序数组拆分左右区间
    const leftInOrder = inorder.slice(0, index);
    const rightInOrder = inorder.slice(index + 1);

    // 前序数组拆分左右区间
    const leftPreOrder = preorder.slice(1, index + 1);
    const rightPreOrder = preorder.slice(index + 1);

    root.left = walk(leftPreOrder, leftInOrder);
    root.right = walk(rightPreOrder, rightInOrder);

    return root;
  };

  return walk(preorder, inorder);
};
// @lc code=end
