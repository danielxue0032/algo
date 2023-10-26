/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode.cn/problems/permutations/description/
 *
 * algorithms
 * Medium (78.95%)
 * Likes:    2729
 * Dislikes: 0
 * Total Accepted:    948.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1]
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  backtrace(res, nums, [], [])
  return res
};

var backtrace = function (result, candidates, path, used) {
  if (path.length === candidates.length) {
    result.push([...path])
    return
  }
  for (let index = 0; index < candidates.length; index++) {
    if (used[index]) continue
    used[index] = true

    path.push(candidates[index])
    backtrace(result, candidates, path, used)
    path.pop()

    used[index] = false
  }
}
// @lc code=end

