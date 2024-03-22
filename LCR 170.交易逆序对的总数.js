/*
 * @lc app=leetcode.cn id=LCR 170 lang=javascript
 * @lcpr version=30119
 *
 * [LCR 170] 交易逆序对的总数
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

/**
 * @param {number[]} record
 * @return {number}
 */
var reversePairs = function (record) {
  if (record.length < 2) return 0;

  let count = 0;
  const mergeSort = (list, left, mid, right) => {
    // console.log("->:", left, mid, right);
    const temp = new Array(right - left + 1).fill(0);

    let index = 0;
    let i = left;
    let j = mid + 1;

    while (i <= mid && j <= right) {
      if (list[i] <= list[j]) {
        temp[index++] = list[i++];
      } else {
        // 统计逆序
        temp[index++] = list[j++];
        count += mid - i + 1;
      }
    }

    // 把左边剩余的数移入数组
    while (i <= mid) {
      temp[index++] = list[i++];
    }

    // 把右边剩余的数移入数组
    while (j <= right) {
      temp[index++] = list[j++];
    }

    // 把排好序的数组覆盖到原数组
    for (let i = 0; i < temp.length; i++) {
      list[left + i] = temp[i];
    }
  };

  const merge = (list, left, right) => {
    if (left === right) return;

    const mid = left + ((right - left) >> 1);
    merge(list, left, mid);
    merge(list, mid + 1, right);
    mergeSort(list, left, mid, right);
  };

  merge(record, 0, record.length - 1);
  return count;
};
// console.log(reversePairs([7, 3, 2, 6, 0, 1, 5, 4]));
// @lc code=end

/*
// @lcpr case=start
// [9, 7, 5, 4, 6]\n
// @lcpr case=end

 */
