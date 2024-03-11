/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode.cn/problems/sort-list/description/
 *
 * algorithms
 * Medium (65.53%)
 * Likes:    2256
 * Dislikes: 0
 * Total Accepted:    476.1K
 * Total Submissions: 726.6K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [4,2,1,3]
 * 输出：[1,2,3,4]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [-1,5,3,4,0]
 * 输出：[-1,0,3,4,5]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = []
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目在范围 [0, 5 * 10^4] 内
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 *
 * 进阶：你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？
 *
 */

// @lc code=start
var merge = function (list1, list2) {
  const dummy = new ListNode(-1);
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      cur.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      cur.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    cur = cur.next;
  }

  cur.next = list1 !== null ? list1 : list2;

  return dummy.next;
};

var sort = function (head) {
  if (head.next === null) return head;

  let slow = head;
  let fast = head;

  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // cut
  const next = slow.next;
  slow.next = null;

  let left = sort(head);
  let right = sort(next);
  return merge(left, right);
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;
  return sort(head);
};
// @lc code=end
