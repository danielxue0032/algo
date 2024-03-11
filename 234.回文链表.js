/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (54.09%)
 * Likes:    1868
 * Dislikes: 0
 * Total Accepted:    698.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,2,1]'
 *
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,2,1]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1,2]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点数目在范围[1, 10^5] 内
 * 0 <= Node.val <= 9
 *
 *
 *
 *
 * 进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 *
 */

// @lc code=start
var revert = function (head) {
  let pre = null;
  let cur = head;
  while (cur !== null) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
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
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   const arr = [];
//   let cur = head;
//   while (cur !== null) {
//     arr.push(cur.val);
//     cur = cur.next;
//   }

//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

var isPalindrome = function (head) {
  // 找中间节点
  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const rightPart = slow.next;
  const revertedRightPart = revert(rightPart);

  let result = true;
  let p1 = head;
  let p2 = revertedRightPart;
  // 右半部分和左半部分对比，
  // 偶数时 p1 和p2 长度一样，奇数时 p1 比p2 长，多了中间节点
  while (p2 !== null) {
    if (p2.val !== p1.val) {
      result = false;
      break;
    }
    p2 = p2.next;
    p1 = p1.next;
  }

  // 恢复反转过的链表
  slow.next = revert(revertedRightPart);

  return result;
};
// @lc code=end
