/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 *
 * https://leetcode.cn/problems/lfu-cache/description/
 *
 * algorithms
 * Hard (47.30%)
 * Likes:    820
 * Dislikes: 0
 * Total Accepted:    84.5K
 * Total Submissions: 178.7K
 * Testcase Example:  '["LFUCache","put","put","get","put","get","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[3],[4,4],[1],[3],[4]]'
 *
 * 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。
 * 
 * 实现 LFUCache 类：
 * 
 * 
 * LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
 * int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
 * void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量
 * capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最久未使用
 * 的键。
 * 
 * 
 * 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。
 * 
 * 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。
 * 
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 * 
 * 
 * 
 * 示例：
 * 
 * 
 * 输入：
 * ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get",
 * "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
 * 输出：
 * [null, null, null, 1, null, -1, 3, null, -1, 3, 4]
 * 
 * 解释：
 * // cnt(x) = 键 x 的使用计数
 * // cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
 * LFUCache lfu = new LFUCache(2);
 * lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
 * lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
 * lfu.get(1);      // 返回 1
 * ⁠                // cache=[1,2], cnt(2)=1, cnt(1)=2
 * lfu.put(3, 3);   // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
 * ⁠                // cache=[3,1], cnt(3)=1, cnt(1)=2
 * lfu.get(2);      // 返回 -1（未找到）
 * lfu.get(3);      // 返回 3
 * ⁠                // cache=[3,1], cnt(3)=2, cnt(1)=2
 * lfu.put(4, 4);   // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
 * ⁠                // cache=[4,3], cnt(4)=1, cnt(3)=2
 * lfu.get(1);      // 返回 -1（未找到）
 * lfu.get(3);      // 返回 3
 * ⁠                // cache=[3,4], cnt(4)=1, cnt(3)=3
 * lfu.get(4);      // 返回 4
 * ⁠                // cache=[3,4], cnt(4)=2, cnt(3)=3
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= capacity <= 10^4
 * 0 <= key <= 10^5
 * 0 <= value <= 10^9
 * 最多调用 2 * 10^5 次 get 和 put 方法
 * 
 * 
 */

// @lc code=start
function ListNode(key, value) {
  this.key = key;
  this.value = value;
  this.freq = 1;
  this.next = null;
  this.prev = null;
}
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.keyToNode = new Map();
  this.freqToList = new Map();
  this.minFreq = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.getNode = function (key) {
  if (!this.keyToNode.has(key)) return null;

  const node = this.keyToNode.get(key);
  this.remove(node);

  const dummy = this.getList(node.freq);
  // 如果当前列表 空了，从 freq map 中删除
  if (dummy.prev === dummy) {
    this.freqToList.delete(node.freq);
    // 如果当前列表 还是最小的次数，最小次数应该更新为右侧的 freq 列表
    if (this.minFreq === node.freq) {
      this.minFreq++;
    }
  }
  this.pushFront(++node.freq, node);
  return node;
};

LFUCache.prototype.get = function (key) {
  const node = this.getNode(key);
  return node === null ? -1 : node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  const node = this.getNode(key);
  if (node) {
    node.value = value;
    return;
  }

  // 容量判断
  if (this.keyToNode.size === this.capacity) {
    // 从最小看过次数的末尾删除一个
    const dummy = this.freqToList.get(this.minFreq);
    const tailNode = dummy.prev;
    if (tailNode !== dummy) {
      this.keyToNode.delete(tailNode.key);
      this.remove(tailNode);
    } else {
      this.freqToList.delete(tailNode.freq);
    }
  }

  const newNode = new ListNode(key, value);
  this.keyToNode.set(key, newNode);
  this.pushFront(1, newNode);
  this.minFreq = 1;
};

LFUCache.prototype.getList = function (freq) {
  if (!this.freqToList.has(freq)) {
    const dummy = new ListNode();
    dummy.next = dummy;
    dummy.prev = dummy;
    this.freqToList.set(freq, dummy);
  }
  return this.freqToList.get(freq);
};

LFUCache.prototype.newList = function () {
  const dummy = new ListNode();
  dummy.next = dummy;
  dummy.prev = dummy;
  return dummy;
};

LFUCache.prototype.pushFront = function (freq, node) {
  if (!this.freqToList.has(freq)) {
    this.freqToList.set(freq, this.newList());
  }
  const dummy = this.freqToList.get(freq);
  node.next = dummy.next;
  node.next.prev = node;

  node.prev = dummy;
  dummy.next = node;
};

LFUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
