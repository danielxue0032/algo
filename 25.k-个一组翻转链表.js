/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (67.70%)
 * Likes:    2197
 * Dislikes: 0
 * Total Accepted:    513.2K
 * Total Submissions: 758K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 
 * 
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 链表中的节点数目为 n
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 * 
 * 
 * 
 * 
 * 进阶：你可以设计一个只用 O(1) 额外内存空间的算法解决此问题吗？
 * 
 * 
 * 
 * 
 */

// @lc code=start

var reverse = function (start, end) {
  let pre = null
  let cur = start
  while (cur !== end) {
    const next = cur.next

    cur.next = pre
    pre = cur
    cur = next
  }

  end.next = pre

  return [end, start]
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(-1)
  dummy.next = head

  let pre = dummy
  let end = dummy

  while (end !== null) {
    // 移动 k 次，得到 一组节点
    for (let index = 0; index < k; index++) {
      end = end.next
      if (end === null) {
        return dummy.next
      }
    }

    // 记录 这组的下一个节点
    const next = end.next
    // 这组的开始节点是 pre的下一个节点
    const start = pre.next

    // 反转这组节点
    const [_head, _tail] = reverse(start, end)

    // 重新连接首尾节点
    pre.next = _head
    _tail.next = next

    // 移动pre到这组的末尾
    pre = _tail
    end = _tail
  }

  return dummy.next
};
// @lc code=end

