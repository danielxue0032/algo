/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode.cn/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (77.48%)
 * Likes:    3410
 * Dislikes: 0
 * Total Accepted:    753.8K
 * Total Submissions: 972.9K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= n <= 8
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = []

  const dfs = (l, r, s) => {
    // 左括号比右括号少，就不可能有有效的括号组合
    if (l < r) return
    if (l === n && r === n) return res.push(s)

    if (l < n) {
      dfs(l + 1, r, s + '(')
    }

    if (r < n) {
      dfs(l, r + 1, s + ')')
    }
  }

  dfs(0, 0, '')

  return res
};

generateParenthesis(3)
// @lc code=end

