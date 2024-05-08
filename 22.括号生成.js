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
  const res = [];

  const backtrace = (l, r, path) => {
    // 左括号少于右括号，已经无效
    if (l < r) return;

    if (l === n && r === n) return res.push(path);

    if (l < n) {
      backtrace(l + 1, r, path + "(");
    }
    if (r < n) {
      backtrace(l, r + 1, path + ")");
    }
  };

  backtrace(0, 0, "");
  return res;
};
console.log(generateParenthesis(2));
// @lc code=end
