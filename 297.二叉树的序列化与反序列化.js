/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 *
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/description/
 *
 * algorithms
 * Hard (59.15%)
 * Likes:    1208
 * Dislikes: 0
 * Total Accepted:    236.1K
 * Total Submissions: 399.2K
 * Testcase Example:  '[1,2,3,null,null,4,5]'
 *
 *
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 *
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 /
 * 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 *
 * 提示: 输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode
 * 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,3,null,null,4,5]
 * 输出：[1,2,3,null,null,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = []
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1]
 * 输出：[1]
 *
 *
 * 示例 4：
 *
 *
 * 输入：root = [1,2]
 * 输出：[1,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中结点数在范围 [0, 10^4] 内
 * -1000 <= Node.val <= 1000
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  const res = [];
  serializeFunc(root, res);
  return res.join("");
};

function serializeFunc(node, res) {
  if (node === null) {
    res.push("#");
    return;
  }
  res.push(node.val, "!");
  serializeFunc(node.left, res);
  serializeFunc(node.right, res);
}
let index = 0;
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // leetcode 不同用例执行，index不会重置，需要手动重置
  index = 0;
  // 处理空树
  if (data === "#") return null;
  return deserializeFun(data);
};

function deserializeFun(str) {
  // 空节点
  if (str[index] === "#") {
    index++;
    return null;
  }

  // 节点
  let val = 0;
  // 处理负数
  let isNegative = false;
  while (str[index] !== "!" && index !== str.length) {
    if (str[index] === "-") {
      isNegative = true;
      index++;
      continue;
    }
    val = val * 10 + parseInt(str[index]);
    index++;
  }
  val = isNegative ? -val : val;
  const root = new TreeNode(val);
  index++;
  root.left = deserializeFun(str);
  root.right = deserializeFun(str);

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
// const root = new TreeNode(1);
// console.log(deserialize(serialize(root)));

// @lc code=end
