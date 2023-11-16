/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode.cn/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (74.19%)
 * Likes:    851
 * Dislikes: 0
 * Total Accepted:    498.9K
 * Total Submissions: 672.3K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 * 解释：[4,9] 也是可通过的
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length

  let first = len1 < len2 ? nums1 : nums2
  let second = len1 < len2 ? nums2 : nums1

  const map = new Map()
  for (let i of first) {
    map.set(i, 0)
  }
  for (let i of second) {
    if (map.has(i)) {
      map.set(i, 1)
    }
  }

  const res = []
  map.forEach((value, key) => {
    if (value > 0) {
      res.push(key)
    }
  })
  return res
};
// @lc code=end

