/*
 * @lc app=leetcode.cn id=面试题 08.08 lang=javascript
 * @lcpr version=30122
 *
 * [面试题 08.08] 有重复字符串的排列组合
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} S
 * @return {string[]}
 */
function Permutation(str) {
  // write code here
  const arr = str.split("");
  arr.sort();

  const res = [];
  const path = [];
  const used = [];

  const backtracking = () => {
    // 结束条件
    if (path.length === arr.length) {
      res.push(path.join(""));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      // 同层，当前节点和前一个节点相同，且前一个节点已经遍历过，说明重复了
      if (i > 0 && arr[i] === arr[i - 1] && used[i - 1] === false) continue;

      if (used[i] === true) continue;

      used[i] = true;
      path.push(arr[i]);
      backtracking();
      path.pop();
      used[i] = false;
    }
  };

  backtracking();

  return res;
}
// @lc code=end

/*
// @lcpr case=start
// "qqe"\n
// @lcpr case=end

// @lcpr case=start
// "ab"\n
// @lcpr case=end

 */
