/*
 * @lc app=leetcode.cn id=LCR 155 lang=javascript
 * @lcpr version=30120
 *
 * [LCR 155] 将二叉搜索树转化为排序的双向链表
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  let pre = null;
  let head = null;
  const inOrder = (node) => {
    if (node === null) return;
    node.left && inOrder(node.left);
    //
    if (pre) {
      pre.right = node;
      node.left = pre;
    } else {
      head = node;
    }
    pre = node;

    node.right && inOrder(node.right);

    return node;
  };
  inOrder(pRootOfTree);
  return head;
};
// @lc code=end

/*
// @lcpr case=start
// [4,2,5,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */
