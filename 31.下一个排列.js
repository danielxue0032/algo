/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode.cn/problems/next-permutation/description/
 *
 * algorithms
 * Medium (38.55%)
 * Likes:    2354
 * Dislikes: 0
 * Total Accepted:    464.9K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3]'
 *
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 * 
 * 
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 
 * 
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列
 * 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 
 * 
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 
 * 
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // https://leetcode.cn/problems/next-permutation/solutions/1/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/

  if (nums.length < 2) return

  let i = nums.length - 2
  let j = nums.length - 1
  let k = nums.length - 1

  // 从后开始，找到第一个 相邻升序 的序列[i, j]
  while (i >= 0 && nums[i] >= nums[j]) {
    i--
    j--
  }

  const swap = function (array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  }

  // 不是最后一个排列，比如 3 2 1， 经过上面的查找后，i 是 -1，j 是0
  if (i >= 0) {
    // find A[i] < A[k]
    while (nums[i] >= nums[k]) {
      k--
    }
    // console.log(`k:${k}, i:${i}`)
    // swap A[i] and A[k]
    swap(nums, i, k)
  }

  // reverse A[j:end]
  for (let l = j, r = nums.length - 1; l < r; l++, r--) {
    swap(nums, l, r)
  }

};
// console.log(nextPermutation([1, 5, 1]))
// @lc code=end

