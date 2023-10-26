/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode.cn/problems/3sum/description/
 *
 * algorithms
 * Medium (37.35%)
 * Likes:    6441
 * Dislikes: 0
 * Total Accepted:    1.5M
 * Total Submissions: 4.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
 * k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 解释：
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
 * 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
 * 注意，输出的顺序和三元组的顺序并不重要。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1,1]
 * 输出：[]
 * 解释：唯一可能的三元组和不为 0 。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [0,0,0]
 * 输出：[[0,0,0]]
 * 解释：唯一可能的三元组和为 0 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return []

  const res = []
  const len = nums.length;
  nums.sort((a, b) => a - b);

  // [a,b,c], 第一层枚举 a
  for (let first = 0; first < len; first++) {
    // 排序后，如果第一个元素已经大于0，不可能凑成三元组
    if (nums[first] > 0) {
      break
    }

    // 三元组 a去重
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }

    const target = -nums[first]

    let left = first + 1
    let right = len - 1

    while (left < right) {
      const sum = nums[left] + nums[right]

      if (sum < target) left++;
      else if (sum > target) right--;
      else {
        res.push([nums[first], nums[left], nums[right]])
        // 跳过重复的b元素
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        // 跳过重复的c元素
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        // 更新左指针
        left++
        // 更新右指针
        right--
      }
    }
  }

  return res;
};
// @lc code=end

