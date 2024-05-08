/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 *
 * https://leetcode.cn/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (65.69%)
 * Likes:    1563
 * Dislikes: 0
 * Total Accepted:    548.6K
 * Total Submissions: 834.9K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,1,2]
 * 输出：
 * [[1,1,2],
 * ⁠[1,2,1],
 * ⁠[2,1,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const path = [];
  const used = [];

  nums.sort((a, b) => a - b);

  const backtracking = () => {
    if (path.length === nums.length) {
      // 不能直接 push 数组，要新数组
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // used[i - 1] == true，说明同一树枝nums[i - 1]使用过
      // used[i - 1] == false，说明同一树层nums[i - 1]使用过
      // 如果同一树层, 节点和前一个节点nums[i - 1]相同，且 nums[i - 1]使用过则直接跳过
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) continue;
      if (used[i] === true) continue;

      used[i] = true;
      path.push(nums[i]);
      backtracking();
      path.pop();
      used[i] = false;
    }
  };

  backtracking();

  return result;
};
// @lc code=end
