/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 *
 * https://leetcode.cn/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (44.09%)
 * Likes:    2083
 * Dislikes: 0
 * Total Accepted:     371.2K
 * Total Submissions: 838.7K
 * Testcase Example:  '[1,2,0]'
 *
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,0]
 * 输出：3
 * 解释：范围 [1,2] 中的数字都在数组中。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 解释：1 在数组中，但 2 没有。
 *
 * 示例 3：
 *
 *
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 解释：最小的正数 1 没有出现。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var firstMissingPositive = function (nums) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 1);
//     } else {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     }
//   }

//   for (let i = 1; i <= nums.length + 1; i++) {
//     if (!map.has(i)) {
//       return i;
//     }
//   }
// };
var firstMissingPositive = function (nums) {
  const n = nums.length;
  // 遍历，把小等于0 的值改为 n+1
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  // console.log("a:", nums);

  // 遍历，如果|x| 属于 [1, n], 给 ｜x｜-1 的位置加负号，如果已有负号，不处理
  for (let i = 0; i < n; i++) {
    const abs = Math.abs(nums[i]);
    if (abs >= 1 && abs <= n) {
      const index = abs - 1;
      nums[index] > 0 && (nums[index] = -nums[index]);
    }
  }
  // console.log("b:", nums);
  // 遍历，返回第一个正数的位置
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) return i + 1;
  }
  // 返回 n+1
  return n + 1;
};
// @lc code=end
