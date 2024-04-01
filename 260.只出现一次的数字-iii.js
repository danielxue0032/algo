/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 *
 * https://leetcode.cn/problems/single-number-iii/description/
 *
 * algorithms
 * Medium (72.16%)
 * Likes:    888
 * Dislikes: 0
 * Total Accepted:    149.9K
 * Total Submissions: 208.2K
 * Testcase Example:  '[1,2,1,3,2,5]'
 *
 * 给你一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
 *
 * 你必须设计并实现线性时间复杂度的算法且仅使用常量额外空间来解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,1,3,2,5]
 * 输出：[3,5]
 * 解释：[5, 3] 也是有效的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-1,0]
 * 输出：[-1,0]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [0,1]
 * 输出：[1,0]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 2 <= nums.length <= 3 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 除两个只出现一次的整数外，nums 中的其他数字都出现两次
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var singleNumber = function (nums) {
//   const res = [];
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     if (!map.has(nums[i])) {
//       map.set(nums[i], 1);
//     } else {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (map.get(nums[i]) === 1) {
//       res.push(nums[i]);
//     }
//   }
//   return res;
// };
var singleNumber = function (nums) {
  // 所有数据异或，得到 z
  const z = nums.reduce((acc, curr) => {
    return acc ^ curr;
  });
  // console.log("z:", z);
  // 找到 z 的不为 0 的一位
  let diff = 1;
  while ((z & diff) === 0) {
    // console.log(diff);
    diff = diff << 1;
  }
  // console.log("diff:", diff);

  // 遍历数组，和上面找到的位异或，等于 1 的放入 A 组，等于 0 的放入 B 组
  const a1 = [];
  const a2 = [];
  for (let i = 0; i < nums.length; i++) {
    if ((nums[i] & diff) === diff) {
      a1.push(nums[i]);
    } else {
      a2.push(nums[i]);
    }
  }
  // console.log("a1, a2:", a1, a2);

  // 数组 A 所有数字异或
  const a = a1.reduce((acc, curr) => {
    return acc ^ curr;
  });
  // 数组 B 的所有数字异或
  const b = a2.reduce((acc, curr) => {
    return acc ^ curr;
  });
  return [a, b];
};
// @lc code=end
