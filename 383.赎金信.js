/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode.cn/problems/ransom-note/description/
 *
 * algorithms
 * Easy (61.58%)
 * Likes:    809
 * Dislikes: 0
 * Total Accepted:    392.3K
 * Total Submissions: 635.9K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
 * 
 * 如果可以，返回 true ；否则返回 false 。
 * 
 * magazine 中的每个字符只能在 ransomNote 中使用一次。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：ransomNote = "a", magazine = "b"
 * 输出：false
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "ab"
 * 输出：false
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：ransomNote = "aa", magazine = "aab"
 * 输出：true
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= ransomNote.length, magazine.length <= 10^5
 * ransomNote 和 magazine 由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// var canConstruct = function (ransomNote, magazine) {
//   if (ransomNote.length > magazine.length) return false

//   const map = new Map();
//   for (let c of magazine) {
//     map.set(c, (map.get(c) || 0) + 1)
//   }

//   for (let c of ransomNote) {
//     if (!map.has(c)) return false

//     map.set(c, (map.get(c) || 0) - 1)
//     if (map.get(c) < 0) return false
//   }
//   return true
// };

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false

  const arr = new Array(26).fill(0)
  const codeOfA = 'a'.charCodeAt(0)

  for (let c of magazine) {
    arr[c.charCodeAt(0) - codeOfA]++
  }

  for (let d of ransomNote) {
    arr[d.charCodeAt(0) - codeOfA]--
    if (arr[d.charCodeAt(0) - codeOfA] < 0) {
      return false
    }
  }

  return true
}
// @lc code=end

