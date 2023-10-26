/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 *
 * https://leetcode.cn/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (22.24%)
 * Likes:    1188
 * Dislikes: 0
 * Total Accepted:    221.2K
 * Total Submissions: 994.7K
 * Testcase Example:  '10\n3'
 *
 * 给你两个整数，被除数 dividend 和除数 divisor。将两数相除，要求 不使用 乘法、除法和取余运算。
 * 
 * 整数除法应该向零截断，也就是截去（truncate）其小数部分。例如，8.345 将被截断为 8 ，-2.7335 将被截断至 -2 。
 * 
 * 返回被除数 dividend 除以除数 divisor 得到的 商 。
 * 
 * 注意：假设我们的环境只能存储 32 位 有符号整数，其数值范围是 [−2^31,  2^31 − 1] 。本题中，如果商 严格大于 2^31 − 1
 * ，则返回 2^31 − 1 ；如果商 严格小于 -2^31 ，则返回 -2^31^ 。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: dividend = 10, divisor = 3
 * 输出: 3
 * 解释: 10/3 = 3.33333.. ，向零截断后得到 3 。
 * 
 * 示例 2:
 * 
 * 
 * 输入: dividend = 7, divisor = -3
 * 输出: -2
 * 解释: 7/-3 = -2.33333.. ，向零截断后得到 -2 。
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * -2^31 <= dividend, divisor <= 2^31 - 1
 * divisor != 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  const MAX = Math.pow(2, 31);
  // 边界条件
  if (dividend === 0) return 0
  if (divisor === 1) return dividend
  if (divisor === -1) {
    // [−2^31,  2^31 − 1] = [-2147483648, 2147483647]
    if (-dividend > MAX - 1) {
      return MAX - 1
    }
    return -dividend
  }

  const isNegative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)

  const div = function (a, b) {
    if (a < b) return 0;

    // 二分
    let count = 1;
    let temp = b;
    while (temp + temp <= a) {
      count = count + count  // 最小解翻倍
      temp = temp + temp  // 测试值翻倍
    }
    // 11/3 = (6 + 5) / 3 = 2 + 5/3 = 2 + 1 = 3
    return count + div(a - temp, b)
  }

  const res = div(Math.abs(dividend), Math.abs(divisor))

  // 商的边界处理
  if (res > MAX - 1) return MAX - 1
  if (res < -MAX) return -MAX
  return isNegative ? -1 * res : res;

};
// @lc code=end

