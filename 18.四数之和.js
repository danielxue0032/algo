/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode.cn/problems/4sum/description/
 *
 * algorithms
 * Medium (36.75%)
 * Likes:    1774
 * Dislikes: 0
 * Total Accepted:    517.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 * 
 * 
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 
 * 
 * 你可以按 任意顺序 返回答案 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return []

  const res = []
  const len = nums.length;

  nums.sort((a, b) => a - b)

  for (let first = 0; first < len - 3; first++) {
    // 剪枝：第一层元素 大于 target 且 大等于0. 只有第一个条件不行，比如 -4,-3,-1, target是-10
    if (nums[first] > target && nums[first] >= 0) {
      break
    }

    // 剪枝 前四个元素大于 target，退出
    // if (nums[first] + nums[first + 1] + nums[first + 2] + nums[first + 3] > target) {
    //   break;
    // }

    // 剪枝：去重
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }

    // 剪枝 第一个元素 和 最后的3个元素 小于 target，那么后面的元素肯定都不满足，跳过
    // if (nums[first] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) {
    //   continue;
    // }

    for (let second = first + 1; second < len - 2; second++) {
      // 第二层剪枝
      if (nums[first] + nums[second] > target && nums[first] + nums[second] >= 0) {
        break
      }

      // 第二层剪枝：前四个数大于 target
      // if (nums[first] + nums[second] + nums[second + 1] + nums[second + 2] > target) {
      //   break;
      // }

      // 第二层剪枝：去重
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }

      // 第二层剪枝: 前两个和 最后两个 小于target,
      // if (nums[first] + nums[second] + nums[len - 2] + nums[len - 1] < target) {
      //   continue;
      // }

      let left = second + 1;
      let right = len - 1;

      while (left < right) {
        const sum = nums[first] + nums[second] + nums[left] + nums[right]
        if (sum < target) left++
        else if (sum > target) right--
        else {
          res.push([nums[first], nums[second], nums[left], nums[right]])
          // 跳过重复元素
          while (left < right && nums[left] === nums[left + 1]) {
            left++
          }
          left++
          // 跳过重复元素
          while (left < right && nums[right] === nums[right - 1]) {
            right--
          }
          right--
        }
      }
    }
  }

  return res;

};
// console.time()
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
// console.timeEnd()
// @lc code=end

