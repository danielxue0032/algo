/*
 * @lc app=leetcode.cn id=LCR 151 lang=javascript
 * @lcpr version=30121
 *
 * [LCR 151] 彩灯装饰记录 III
 */

// @lcpr-template-start

// @lcpr-template-end
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
 * @return {number[][]}
 */
var decorateRecord = function (root) {
  const q = [];
  const result = [];
  root && q.push(root);

  let flag = true;

  while (q.length) {
    const len = q.length;
    const level = [];
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      if (flag) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }

      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }
    flag = !flag;
    result.push(level);
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [8,17,21,18,null,null,6]\n
// @lcpr case=end

 */
