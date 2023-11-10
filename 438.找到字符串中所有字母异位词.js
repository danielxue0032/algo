/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (54.22%)
 * Likes:    1325
 * Dislikes: 0
 * Total Accepted:    341.6K
 * Total Submissions: 630.3K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: s = "cbaebabacd", p = "abc"
 * 输出: [0,6]
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入: s = "abab", p = "ab"
 * 输出: [0,1,2]
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
 * 
 * 
 * 
 * 
 * 提示:
 * 
 * 
 * 1 <= s.length, p.length <= 3 * 10^4
 * s 和 p 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return []

  const res = []

  const tMap = new Map()
  for (let i of p) {
    tMap.set(i, (tMap.get(i) || 0) + 1)
  }

  let vp = new Map()
  let left = 0
  let right = 0
  let valid = false

  while (right < s.length) {
    const c = s[right]

    // 更新窗口内数据
    if (tMap.has(c)) {
      vp.set(c, (vp.get(c) || 0) + 1)
      if (vp.get(c) === tMap.get(c)) {
        valid++
      }
    }

    // 判断左侧窗口是否要收缩： 窗口长度大等于 p 的长度
    while (right - left + 1 >= p.length) {
      if (valid === tMap.size) {
        res.push(left)
      }

      // 移动左窗口
      const d = s[left]
      left++

      // 更新窗口内的数据
      if (tMap.has(d)) {
        if (vp.get(d) === tMap.get(d)) {
          valid--
        }
        vp.set(d, vp.get(d) - 1)
      }
    }

    right++
  }

  return res
};
// console.log(findAnagrams("cbaebabacd", "abc"))
// console.log(findAnagrams("baa", "aa")) //[1]

// @lc code=end

