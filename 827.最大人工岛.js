/*
 * @lc app=leetcode.cn id=827 lang=javascript
 *
 * [827] 最大人工岛
 *
 * https://leetcode.cn/problems/making-a-large-island/description/
 *
 * algorithms
 * Hard (47.20%)
 * Likes:    408
 * Dislikes: 0
 * Total Accepted:    52K
 * Total Submissions: 110.2K
 * Testcase Example:  '[[1,0],[0,1]]'
 *
 * 给你一个大小为 n x n 二进制矩阵 grid 。最多 只能将一格 0 变成 1 。
 *
 * 返回执行此操作后，grid 中最大的岛屿面积是多少？
 *
 * 岛屿 由一组上、下、左、右四个方向相连的 1 形成。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: grid = [[1, 0], [0, 1]]
 * 输出: 3
 * 解释: 将一格0变成1，最终连通两个小岛得到面积为 3 的岛屿。
 *
 *
 * 示例 2:
 *
 *
 * 输入: grid = [[1, 1], [1, 0]]
 * 输出: 4
 * 解释: 将一格0变成1，岛屿的面积扩大为 4。
 *
 * 示例 3:
 *
 *
 * 输入: grid = [[1, 1], [1, 1]]
 * 输出: 4
 * 解释: 没有0可以让我们变成1，面积依然为 4。
 *
 *
 *
 * 提示：
 *
 *
 * n == grid.length
 * n == grid[i].length
 * 1 <= n <= 500
 * grid[i][j] 为 0 或 1
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // 岛屿编号从 2 开始
  let landIndex = 1;
  // 岛屿编号对应的面积，并更新陆地为岛屿的编号
  const landAreaMap = new Map();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        landIndex++;
        const area = dfs(grid, i, j, landIndex);
        landAreaMap.set(landIndex, area);
      }
    }
  }

  // 遍历海洋格子，找到连接后的最大面积
  let joinMax = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 0) {
        const indexes = islandIndex(grid, i, j);
        // 计算相邻岛屿的最大和
        let area = 0;
        indexes.forEach((i) => {
          area += landAreaMap.get(i);
        });
        // 海洋格子变为陆地
        area += 1;
        joinMax = Math.max(joinMax, area);
      }
    }
  }

  // 没有相邻岛屿，则返回面积
  return joinMax === 0 ? landAreaMap.get(landIndex) : joinMax;
};

// 返回海洋格子的上下左右 岛屿编号,去重
var islandIndex = function (grid, i, j) {
  const res = new Set();
  const list = [
    [i - 1, j],
    [i + 1, j],
    [i, j - 1],
    [i, j + 1],
  ];

  for (item of list) {
    const [r, c] = item;
    if (inArea(grid, r, c) && grid[r][c] !== 0) {
      res.add(grid[r][c]);
    }
  }

  return res;
};

var dfs = function (grid, i, j, landIndex) {
  // 超出边界，返回 0
  if (!inArea(grid, i, j)) return 0;
  // 海洋格子，返回 0
  if (grid[i][j] === 0) return 0;
  // 遍历过的，返回 0
  if (grid[i][j] !== 1) return 0;

  grid[i][j] = landIndex;

  return (
    1 +
    dfs(grid, i - 1, j, landIndex) +
    dfs(grid, i + 1, j, landIndex) +
    dfs(grid, i, j - 1, landIndex) +
    dfs(grid, i, j + 1, landIndex)
  );
};

var inArea = function (grid, i, j) {
  return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
};
// @lc code=end
