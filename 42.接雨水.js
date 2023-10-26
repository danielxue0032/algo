/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode.cn/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (63.08%)
 * Likes:    4813
 * Dislikes: 0
 * Total Accepted:    795.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 
 * 
 * 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出：6
 * 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：height = [4,2,0,3,2,5]
 * 输出：9
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == height.length
 * 1 <= n <= 2 * 10^4
 * 0 <= height[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length
  if (len < 3) return 0

  let leftMax = new Array(len).fill(0)
  let rightMax = new Array(len).fill(0)

  // 开头、末尾接不了雨水
  // 记录每个位置左边的最大值, leftMax[i]表示位置 i 左边的位置，高度的最大值
  for (let index = 1; index < len; index++) {
    leftMax[index] = Math.max(leftMax[index - 1], height[index - 1])
  }

  // 记录每个位置右边的最大值, rightMax[i]表示位置 i 右边的位置，高度的最大值
  for (let index = len - 2; index >= 0; index--) {
    rightMax[index] = Math.max(rightMax[index + 1], height[index + 1])
  }

  let sum = 0
  for (let index = 1; index < len - 1; index++) {
    const min = Math.min(leftMax[index], rightMax[index])
    if (min > height[index]) {
      sum += min - height[index]
    }
  }

  return sum
}

// @lc code=end

