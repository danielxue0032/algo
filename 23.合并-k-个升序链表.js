/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并 K 个升序链表
 *
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (58.45%)
 * Likes:    2669
 * Dislikes: 0
 * Total Accepted:    718.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：lists = [[1,4,5],[1,3,4],[2,6]]
 * 输出：[1,1,2,3,4,4,5,6]
 * 解释：链表数组如下：
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * 将它们合并到一个有序链表中得到。
 * 1->1->2->3->4->4->5->6
 * 
 * 
 * 示例 2：
 * 
 * 输入：lists = []
 * 输出：[]
 * 
 * 
 * 示例 3：
 * 
 * 输入：lists = [[]]
 * 输出：[]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] 按 升序 排列
 * lists[i].length 的总和不超过 10^4
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  // 顺序合并方式
  // let res = null
  // for (let i = 0; i < lists.length; i++) {
  //   res = mergeTwoLists(res, lists[i])
  // }
  // return res

  // 归并排序
  return merge(lists, 0, lists.length - 1)
};

var merge = function (lists, left, right) {
  if (left === right) return lists[left]
  if (left > right) return null
  const mid = left + ((right - left) >> 1)
  return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right))
}

var mergeTwoLists = function (list1, list2) {
  if (list1 === null || list2 === null) return list1 !== null ? list1 : list2;

  const preHead = new ListNode();
  let prev = preHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      prev.next = list1
      list1 = list1.next
    } else {
      prev.next = list2
      list2 = list2.next
    }
    prev = prev.next
  }

  prev.next = list1 === null ? list2 : list1
  return preHead.next;
}
// @lc code=end

