/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode.cn/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.59%)
 * Likes:    2217
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.9M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 *
 *
 * 提示:
 *
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return;

  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    // 慢指针找到第一个0
    while (nums[slow] !== 0 && slow < nums.length) {
      slow++;
      fast++;
    }

    if (slow < nums.length) {
      // 找到了,然后用快指针从慢指针的下一个开始，找到第一个非0
      // right = left + 1/
      while (nums[fast] === 0 && fast < nums.length) {
        fast++;
      }

      if (fast < nums.length) {
        // 交换位置
        const t = nums[fast];
        nums[fast] = nums[slow];
        nums[slow] = t;
        slow++;
        fast++;
      }
    }
  }
};
//  1 1 0 3 12
// @lc code=end
