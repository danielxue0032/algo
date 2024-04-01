/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.30%)
 * Likes:    2605
 * Dislikes: 0
 * Total Accepted:    513.5K
 * Total Submissions: 1M
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 *
 * 返回 滑动窗口中的最大值 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1], k = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 1 <= k <= nums.length
 *
 *
 */

// @lc code=start
function MyQueue() {
  this.queue = [];
}
MyQueue.prototype.push = function (x) {
  while (this.queue.length && x > this.queue[this.queue.length - 1]) {
    this.queue.pop();
  }
  this.queue.push(x);
};
MyQueue.prototype.pop = function (x) {
  if (x === this.queue[0]) {
    this.queue.shift();
  }
};
MyQueue.prototype.getMaxValue = function () {
  return this.queue[0];
};

var maxSlidingWindow = function (nums, k) {
  const queue = new MyQueue();
  const res = [];

  for (let i = 0; i < k; i++) {
    queue.push(nums[i]);
  }
  res.push(queue.getMaxValue());
  // 移动窗口，从 k 到 length-1 次
  for (let i = k; i < nums.length; i++) {
    queue.pop(nums[i - k]);
    queue.push(nums[i]);
    res.push(queue.getMaxValue());
  }
  return res;
};
// console.log(maxSlidingWindow([1, -1], 1))
// console.log(maxSlidingWindow([7, 2, 4], 2))

// @lc code=end
