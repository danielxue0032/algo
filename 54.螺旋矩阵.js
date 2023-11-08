/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (49.78%)
 * Likes:    1531
 * Dislikes: 0
 * Total Accepted:    425K
 * Total Submissions: 852.9K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 
 * -100 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  const res = []

  const min = Math.min(m, n)
  let loop = parseInt(min / 2)
  let offset = 1

  let startX = 0
  let startY = 0

  while (loop--) {
    let i = startX
    let j = startY

    // 上边
    for (; j < n - offset; j++) {
      res.push(matrix[i][j])
    }

    // 右边
    for (; i < m - offset; i++) {
      res.push(matrix[i][j])
    }

    // 下边
    for (; j > startY; j--) {
      res.push(matrix[i][j])
    }

    // 左边
    for (; i > startX; i--) {
      res.push(matrix[i][j])
    }


    startX++
    startY++

    offset++
  }

  if (min % 2) {
    let i = startX
    let j = startY
    if (m <= n) {
      // 中间是一行
      for (; j <= n - offset; j++) {
        res.push(matrix[i][j])
      }
    } else {
      // 中间是一列
      for (; i <= m - offset; i++) {
        res.push(matrix[i][j])
      }
    }
  }

  return res
};
// console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
// console.log(spiralOrder([[3], [2]]))
// @lc code=end

