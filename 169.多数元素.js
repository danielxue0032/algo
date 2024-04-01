/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 *
 * https://leetcode.cn/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.79%)
 * Likes:    1741
 * Dislikes: 0
 * Total Accepted:    668.9K
 * Total Submissions: 1M
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,2,3]
 * 输出：3
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let winner = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (counter === 0) {
      winner = ele;
      counter = 1;
      continue;
    }
    if (ele === winner) {
      counter++;
    } else {
      counter--;
    }
  }
  return winner;
};

// var majorityElement = function (nums) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 1);
//       continue;
//     }
//     map.set(nums[i], map.get(nums[i]) + 1);
//   }
//   //
//   let number;
//   let maxCount = 0;
//   map.forEach((value, key) => {
//     if (value >= maxCount) {
//       maxCount = value;
//       number = key;
//     }
//   });
//   return number;
// };
// @lc code=end
