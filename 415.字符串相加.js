/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode.cn/problems/add-strings/description/
 *
 * algorithms
 * Easy (54.55%)
 * Likes:    820
 * Dislikes: 0
 * Total Accepted:    324.1K
 * Total Submissions: 594.6K
 * Testcase Example:  '"11"\n"123"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
 *
 * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 *
 *
 * 示例 2：
 *
 *
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 *
 *
 * 示例 3：
 *
 *
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 *
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 和num2 都只包含数字 0-9
 * num1 和num2 都不包含任何前导零
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // res
  // 双指针
  // 进位标识
  // 循环
  // 个位相加 + 进位
  // 大于 10，更新进位
  // 更新结果： 结果 +  剩余数
  // 如果有进位，加上
  let res = "";
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let flag = 0;

  while (p1 >= 0 || p2 >= 0) {
    const sum = (p1 >= 0 ? +num1[p1] : 0) + (p2 >= 0 ? +num2[p2] : 0) + flag;
    flag = sum > 9 ? 1 : 0;
    res = (sum % 10) + res;

    p1--;
    p2--;
  }

  if (flag) res = flag + res;

  return res;
};
// @lc code=end
