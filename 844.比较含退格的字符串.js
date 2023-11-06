/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 *
 * https://leetcode.cn/problems/backspace-string-compare/description/
 *
 * algorithms
 * Easy (47.81%)
 * Likes:    688
 * Dislikes: 0
 * Total Accepted:    218.6K
 * Total Submissions: 457.3K
 * Testcase Example:  '"ab#c"\n"ad#c"'
 *
 * 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。
 * 
 * 注意：如果对空文本输入退格字符，文本继续为空。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ab#c", t = "ad#c"
 * 输出：true
 * 解释：s 和 t 都会变成 "ac"。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "ab##", t = "c#d#"
 * 输出：true
 * 解释：s 和 t 都会变成 ""。
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "a#c", t = "b"
 * 输出：false
 * 解释：s 会变成 "c"，但 t 仍然是 "b"。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length, t.length <= 200
 * s 和 t 只含有小写字母以及字符 '#'
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 
 * 你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sp = s.length - 1
  let tp = t.length - 1

  let sCount = 0
  let tCount = 0

  while (sp >= 0 || tp >= 0) {
    // s 字符串最近一处不受#号影响的位置
    while (sp >= 0) {
      if (s[sp] === '#') {
        sCount++
        sp--
      } else {
        if (sCount > 0) {
          sCount--
          sp--
        } else {
          break
        }
      }
    }

    // console.log('s->', sp)

    while (tp >= 0) {
      if (t[tp] === '#') {
        tCount++
        tp--
      } else {
        if (tCount > 0) {
          tCount--
          tp--
        } else {
          break
        }
      }
    }

    // console.log('t->', tp)

    if (s[sp] !== t[tp]) {
      return false
    }

    if (sp >= 0) sp--
    if (tp >= 0) tp--
  }

  // console.log('sp,tp->', sp, tp)
  return s[sp] === t[tp]
};
// @lc code=end

