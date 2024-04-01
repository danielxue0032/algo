/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode.cn/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (46.89%)
 * Likes:    738
 * Dislikes: 0
 * Total Accepted:    575.6K
 * Total Submissions: 1.2M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 *
 * 字母和数字都属于字母数字字符。
 *
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出：true
 * 解释："amanaplanacanalpanama" 是回文串。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "race a car"
 * 输出：false
 * 解释："raceacar" 不是回文串。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = " "
 * 输出：true
 * 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
 * 由于空字符串正着反着读都一样，所以是回文串。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 2 * 10^5
 * s 仅由可打印的 ASCII 字符组成
 *
 *
 */

// @lc code=start
const dict = {
  0: "0".charCodeAt(0),
  9: "9".charCodeAt(0),
  a: "a".charCodeAt(0),
  z: "z".charCodeAt(0),
  A: "A".charCodeAt(0),
  Z: "Z".charCodeAt(0),
};
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const len = s.length;
  let left = 0;
  let right = len - 1;
  let result = true;

  const isAlphaNumber = (char) => {
    const code = char.charCodeAt(0);
    if (code >= dict["0"] && code <= dict["9"]) return true;
    if (code >= dict["a"] && code <= dict["z"]) return true;
    if (code >= dict["A"] && code <= dict["Z"]) return true;
    return false;
  };

  while (left <= right) {
    while (left <= len - 1 && !isAlphaNumber(s[left])) {
      left++;
    }
    while (right >= 0 && !isAlphaNumber(s[right])) {
      right--;
    }
    if (
      left <= len - 1 &&
      right >= 0 &&
      s[left].toLowerCase() !== s[right].toLowerCase()
    ) {
      result = false;
      break;
    }
    left++;
    right--;
  }

  return result;
};

// @lc code=end
