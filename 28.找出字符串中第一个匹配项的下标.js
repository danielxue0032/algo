/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 *
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * algorithms
 * Easy (42.88%)
 * Likes:    2076
 * Dislikes: 0
 * Total Accepted:    945K
 * Total Submissions: 2.2M
 * Testcase Example:  '"sadbutsad"\n"sad"'
 *
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0
 * 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：haystack = "sadbutsad", needle = "sad"
 * 输出：0
 * 解释："sad" 在下标 0 和 6 处匹配。
 * 第一个匹配项的下标是 0 ，所以返回 0 。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：haystack = "leetcode", needle = "leeto"
 * 输出：-1
 * 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= haystack.length, needle.length <= 10^4
 * haystack 和 needle 仅由小写英文字符组成
 * 
 * 
 */

// @lc code=start
var getNext = function (next, s) {
  // i 是后缀末尾，j 是前缀末尾
  // 初始化
  let j = 0
  next[0] = j

  for (let i = 1; i < s.length; i++) {
    // 前后缀不同的情况
    while (j > 0 && s[i] !== s[j]) {
      j = next[j - 1]
    }

    // 前后缀相同的情况
    if (s[i] === s[j]) {
      j++
    }

    // 更新
    next[i] = j
  }
}
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const next = new Array(needle.length);
  getNext(next, needle)

  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1]
    }

    if (haystack[i] === needle[j]) {
      j++
    }

    if (j === needle.length) {
      return i - needle.length + 1
    }
  }

  return -1
};
// console.log(strStr('sadbutsad', 'sad'))
// console.log(strStr('leetcode', 'leeto'))
// @lc code=end

