/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (55.80%)
 * Likes:    1670
 * Dislikes: 0
 * Total Accepted:    442K
 * Total Submissions: 792K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回
 * 反转后的链表 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目为 n
 * 1
 * -500
 * 1
 *
 *
 *
 *
 * 进阶： 你可以使用一趟扫描完成反转吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let pre = dummy;

  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let cur = pre.next;
  for (let i = 0; i < right - left; i++) {
    const next = cur.next;

    // cur 的下一个节点是 next 的下一个节点
    cur.next = next.next;

    // next 的下一个节点是 pre 的下一个节点，也就是当前的区间开始节点
    next.next = pre.next;
    // pre 的下一个节点是 next，也就是新的区间开始节点
    pre.next = next;
  }

  return dummy.next;
};
// @lc code=end
