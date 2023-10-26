/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode.cn/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (43.94%)
 * Likes:    4209
 * Dislikes: 0
 * Total Accepted:    1.6M
 * Total Submissions: 3.7M
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "()"
 * 输出：true
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "()[]{}"
 * 输出：true
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = "(]"
 * 输出：false
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= s.length <= 10^4
 * s 仅由括号 '()[]{}' 组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])
  const stack = []
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    if (map.has(char)) {
      stack.push(char)
      continue
    }

    // 是右括号，把栈顶的元素出栈，进行比较，如果匹配就继续，不匹配就返回 false
    const left = stack.pop()
    if (char !== map.get(left)) {
      return false
    }
  }
  return stack.length === 0;
};
// @lc code=end

