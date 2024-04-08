/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 *
 * https://leetcode.cn/problems/lru-cache/description/
 *
 * algorithms
 * Medium (53.60%)
 * Likes:    3137
 * Dislikes: 0
 * Total Accepted:    619.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 
 * 实现 LRUCache 类：
 * 
 * 
 * 
 * 
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组
 * key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * 输出
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * 解释
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // 缓存是 {1=1}
 * lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
 * lRUCache.get(1);    // 返回 1
 * lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
 * lRUCache.get(2);    // 返回 -1 (未找到)
 * lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
 * lRUCache.get(1);    // 返回 -1 (未找到)
 * lRUCache.get(3);    // 返回 3
 * lRUCache.get(4);    // 返回 4
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10000
 * 0 <= value <= 10^5
 * 最多调用 2 * 10^5 次 get 和 put
 * 
 * 
 */

// @lc code=start
function ListNode(key, value) {
  this.key = key;
  this.value = value || null;
  this.prev = null;
  this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dummy = new ListNode();
  this.dummy.prev = this.dummy;
  this.dummy.next = this.dummy;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.getNode(key);
  return node === null ? -1 : node.value;
};

LRUCache.prototype.getNode = function (key) {
  if (!this.map.has(key)) return null;

  const node = this.map.get(key);
  this.removeNode(node);
  this.addFront(node);
  return node;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.getNode(key);
  if (node) {
    node.value = value;
    return;
  }
  const newNode = new ListNode(key, value);
  this.map.set(key, newNode);
  // 在头部插入节点
  this.addFront(newNode);
  if (this.map.size > this.capacity) {
    // 删除尾部节点
    const tail = this.dummy.prev;
    this.map.delete(tail.key);
    this.removeNode(tail);
  }
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.addFront = function (node) {
  node.next = this.dummy.next;
  node.prev = this.dummy;
  node.next.prev = node;
  this.dummy.next = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
