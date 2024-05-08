/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 *
 * https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (52.06%)
 * Likes:    838
 * Dislikes: 0
 * Total Accepted:    108K
 * Total Submissions: 207.3K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * 给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。
 *
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
 * 输出：4
 * 解释：最长递增路径为 [1, 2, 6, 9]。
 *
 * 示例 2：
 *
 *
 * 输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
 * 输出：4
 * 解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
 *
 *
 * 示例 3：
 *
 *
 * 输入：matrix = [[1]]
 * 输出：1
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
 * 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  let max = 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  const memo = new Array(rows);
  for (let i = 0; i < rows; i++) {
    memo[i] = new Array(cols);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const longPath = backtracking(memo, matrix, i, j);
      if (longPath > max) {
        max = longPath;
      }
    }
  }

  return max;
};

const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const backtracking = (memo, matrix, r, c, prev) => {
  // 越界，返回
  if (!inArea(matrix, r, c)) return 0;

  const cur = matrix[r][c];
  // 比前一个值小，返回
  if (prev !== undefined && cur <= prev) return 0;

  // 已经遍历过了，返回已有值
  if (memo[r][c]) return memo[r][c];

  let maxFollow = 0;

  dirs.forEach((item) => {
    const follow = backtracking(memo, matrix, r + item[0], c + item[1], cur);
    if (follow > maxFollow) maxFollow = follow;
  });

  memo[r][c] = 1 + maxFollow;

  return memo[r][c];
};

const inArea = (matrix, i, j) => {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length;
};

// console.log(
//   longestIncreasingPath([
//     [9, 9, 4],
//     [6, 6, 8],
//     [2, 1, 1],
//   ])
// );

// @lc code=end
