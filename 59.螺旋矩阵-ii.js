/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode.cn/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (71.84%)
 * Likes:    1202
 * Dislikes: 0
 * Total Accepted:    366.1K
 * Total Submissions: 510.1K
 * Testcase Example:  '3'
 *
 * 给你一个正整数 n ，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = new Array(n).fill(0).map(i => new Array(n).fill(0))

  let loop = parseInt(n / 2)
  let offset = 1

  let startX = 0
  let startY = 0

  let count = 1

  while (loop--) {
    let i = startX
    let j = startY

    // 上边
    for (; j < n - offset; j++) {
      res[i][j] = count++
    }

    // 右边
    for (; i < n - offset; i++) {
      res[i][j] = count++
    }

    // 下边
    for (; j > startY; j--) {
      res[i][j] = count++
    }

    // 左边
    for (; i > startX; i--) {
      res[i][j] = count++
    }

    startX++
    startY++

    offset++
  }

  // n为奇数，给中间赋值
  if (n % 2) {
    const mid = parseInt(n / 2)
    res[mid][mid] = count
  }

  return res

};
// console.log(generateMatrix(3))
// @lc code=end

