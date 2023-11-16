/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 *
 * https://leetcode.cn/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (53.03%)
 * Likes:    1058
 * Dislikes: 0
 * Total Accepted:    472.2K
 * Total Submissions: 887.9K
 * Testcase Example:  '"the sky is blue"'
 *
 * 给你一个字符串 s ，请你反转字符串中 单词 的顺序。
 * 
 * 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
 * 
 * 返回 单词 顺序颠倒且 单词 之间用单个空格连接的结果字符串。
 * 
 * 注意：输入字符串 s中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "the sky is blue"
 * 输出："blue is sky the"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "  hello world  "
 * 输出："world hello"
 * 解释：反转后的字符串中不能存在前导空格和尾随空格。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a good   example"
 * 输出："example good a"
 * 解释：如果两个单词间有多余的空格，反转后的字符串需要将单词间的空格减少到仅有一个。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 包含英文大小写字母、数字和空格 ' '
 * s 中 至少存在一个 单词
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：如果字符串在你使用的编程语言中是一种可变数据类型，请尝试使用 O(1) 额外空间复杂度的 原地 解法。
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const arr = Array.from(s)

  removeExtraSpaces(arr)

  reverse(arr, 0, arr.length - 1)

  let start = 0
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      reverse(arr, start, i - 1)
      start = i + 1
    }
  }

  return arr.join(' ')
};

// 移除多余的空格，首尾无空格，每个单词中间只有一个空格
var removeExtraSpaces = function (arr) {
  // 快慢指针
  let slow = 0
  let fast = 0
  while (fast < arr.length) {
    if (arr[fast] !== ' ') {
      // slow 不等于 0， 说明不是第一个单词,需要在下个单词前加空格
      if (slow !== 0) {
        arr[slow] = ' '
        slow++
      }
      // 补上单词，遇到空格说明单词结束
      while (fast < arr.length && arr[fast] !== ' ') {
        arr[slow] = arr[fast]
        slow++
        fast++
      }
    }
    fast++
  }
  // slow 的大小就是去除多余空格后的大小
  arr.length = slow
}

// 反转
var reverse = function (arr, start, end) {
  let left = start
  let right = end
  while (left < right) {
    // 交换
    [arr[left], arr[right]] = [arr[right], arr[left]]
    right--
    left++
  }
}

// console.log(reverseWords('  the sky   is blue  ')) // b l u e   i s   s k y   t h e
// @lc code=end

