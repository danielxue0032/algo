/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 *
 * https://leetcode.cn/problems/minimum-window-substring/description/
 *
 * algorithms
 * Hard (45.38%)
 * Likes:    2735
 * Dislikes: 0
 * Total Accepted:    481.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '"ADOBECODEBANC"\n"ABC"'
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 ""
 * 。
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "ADOBECODEBANC", t = "ABC"
 * 输出："BANC"
 * 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "a", t = "a"
 * 输出："a"
 * 解释：整个字符串 s 是最小覆盖子串。
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: s = "a", t = "aa"
 * 输出: ""
 * 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
 * 因此没有符合条件的子字符串，返回空字符串。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * ^m == s.length
 * ^n == t.length
 * 1 <= m, n <= 10^5
 * s 和 t 由英文字母组成
 * 
 * 
 * 
 * 进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 记录 t 中的字符类型和数量
  let tMap = new Map()
  for (let i = 0; i < t.length; i++) {
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1)
  }

  // 记录最小覆盖子串的起始位置和长度
  let start = 0
  let len = Number.MAX_SAFE_INTEGER

  // 滑动窗口
  let vp = new Map()
  let left = 0
  let right = 0

  // 当窗口内的某个字符和目标字符一致，且数量相同时增加1
  let valid = 0

  while (right < s.length) {
    // 移入窗口的字符
    const char = s[right]

    // 更新窗口内的数据
    if (tMap.has(char)) {
      vp.set(char, (vp.get(char) || 0) + 1)
      if (vp.get(char) === tMap.get(char)) {
        valid++
      }
    }

    // 判断是否需要缩小左侧窗口
    while (valid === tMap.size) {
      // 找到最小覆盖子串
      if (right - left < len) {
        start = left
        len = right - left + 1
      }

      // 将要移出窗口的字符
      const d = s[left]
      // 更新窗口内的数据
      if (tMap.has(d)) {
        if (vp.get(d) === tMap.get(d)) {
          valid--
        }
        vp.set(d, vp.get(d) - 1)
      }
      // 左移窗口
      left++
    }

    // 右移窗口
    right++
  }

  return len === Number.MAX_SAFE_INTEGER ? '' : s.substring(start, start + len)
};
// console.log(minWindow("ADOBECODEBANC", "ABC")) // BANC
// console.log(minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd")) // abbbbbcdd
// @lc code=end

