/*
* @lc app=leetcode.cn id=24 lang=javascript
*
* [24] 两两交换链表中的节点
*
* https://leetcode.cn/problems/swap-nodes-in-pairs/description/
*
* algorithms
* Medium (71.65%)
* Likes:    2060
* Dislikes: 0
* Total Accepted:    722.6K
* Total Submissions: 1M
* Testcase Example:  '[1,2,3,4]'
*
* 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
* 
* 
* 
* 示例 1：
* 
* 
* 输入：head = [1,2,3,4]
* 输出：[2,1,4,3]
* 
* 
* 示例 2：
* 
* 
* 输入：head = []
* 输出：[]
* 
* 
* 示例 3：
* 
* 
* 输入：head = [1]
* 输出：[1]
* 
* 
* 
* 
* 提示：
* 
* 
* 链表中节点的数目在范围 [0, 100] 内
* 0 <= Node.val <= 100
* 
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const dummy = new ListNode(-1)
  dummy.next = head

  let cur = dummy
  while (cur.next !== null && cur.next.next !== null) {
    const node1 = cur.next
    const node2 = cur.next.next

    // 交换 cur 后面两个元素, cur -> node1 -> node2 -> temp 交换后 cur -> node2 -> node1 -> temp
    const temp = node2.next
    node1.next = temp
    node2.next = node1
    cur.next = node2

    cur = node1
  }

  return dummy.next
};
// @lc code=end

