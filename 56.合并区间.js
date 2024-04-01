/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 *
 * https://leetcode.cn/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (49.82%)
 * Likes:    2282
 * Dislikes: 0
 * Total Accepted:    828.5K
 * Total Submissions: 1.7M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi]
 * 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,4],[4,5]]
 * 输出：[[1,5]]
 * 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  // 按 start升序
  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];
  const len = intervals.length;

  const isIntersect = (a, b) => {
    // [start, end]
    const notIntersect = a[0] > b[1] || a[1] < b[0];
    return !notIntersect;
  };

  let cur = 0;
  while (cur < len) {
    const span = [intervals[cur][0], intervals[cur][1]];
    while (cur + 1 < len && isIntersect(span, intervals[cur + 1])) {
      span[0] = Math.min(span[0], intervals[cur + 1][0]);
      span[1] = Math.max(span[1], intervals[cur + 1][1]);
      cur++;
    }
    // 合并
    res.push(span);
    cur++;
  }
  return res;
};
// @lc code=end
