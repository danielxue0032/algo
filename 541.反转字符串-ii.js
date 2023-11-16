/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 *
 * https://leetcode.cn/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (57.67%)
 * Likes:    547
 * Dislikes: 0
 * Total Accepted:    236.3K
 * Total Submissions: 409.9K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 
 * 
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abcdefg", k = 2
 * 输出："bacdfeg"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abcd", k = 2
 * 输出："bacd"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由小写英文组成
 * 1 <= k <= 10^4
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const arr = Array.from(s)

  for (let i = 0; i < s.length; i += 2 * k) {
    // 1. 每隔2k 字符，前 k 个反转
    // 2. 剩余字符 小于2k，但大等于 k，反转前 k 个
    if (i + k < s.length) {
      revert(arr, i, i + k - 1)
    } else {
      // 3. 剩余字符小于 k，将剩余全部反转
      revert(arr, i, s.length - 1)
    }
  }

  return arr.join("")
};
var revert = function (s, start, end) {
  while (start < end) {
    const t = s[end]
    s[end] = s[start]
    s[start] = t

    start++
    end--
  }
}
// console.log(reverseStr("abcdefg", 2)) // bacdfeg
// @lc code=end

