/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 *
 * https://leetcode.cn/problems/4sum-ii/description/
 *
 * algorithms
 * Medium (64.24%)
 * Likes:    921
 * Dislikes: 0
 * Total Accepted:    233.7K
 * Total Submissions: 363.8K
 * Testcase Example:  '[1,2]\n[-2,-1]\n[-1,2]\n[0,2]'
 *
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l)
 * 能满足：
 * 
 * 
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
 * 输出：2
 * 解释：
 * 两个元组如下：
 * 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) +
 * (-1) + 2 = 0
 * 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) +
 * (-1) + 0 = 0
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
 * 输出：1
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == nums1.length
 * n == nums2.length
 * n == nums3.length
 * n == nums4.length
 * 1 <= n <= 200
 * -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const twoSumMap = new Map()
  for (let i of nums1) {
    for (let j of nums2) {
      const sum = i + j
      // console.log(i, j, sum)
      twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1)
    }
  }
  // console.log(twoSumMap)

  let count = 0
  for (let i of nums3) {
    for (let j of nums4) {
      const key = 0 - i - j
      if (twoSumMap.has(key)) {
        count += twoSumMap.get(key)
      }
    }
  }
  return count
};
// console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
// @lc code=end

