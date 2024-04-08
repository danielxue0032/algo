/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 *
 * https://leetcode.cn/problems/validate-ip-address/description/
 *
 * algorithms
 * Medium (28.20%)
 * Likes:    251
 * Dislikes: 0
 * Total Accepted:    68.2K
 * Total Submissions: 242K
 * Testcase Example:  '"172.16.254.1"'
 *
 * 给定一个字符串 queryIP。如果是有效的 IPv4 地址，返回 "IPv4" ；如果是有效的 IPv6 地址，返回 "IPv6"
 * ；如果不是上述类型的 IP 地址，返回 "Neither" 。
 *
 * 有效的IPv4地址 是 “x1.x2.x3.x4” 形式的IP地址。 其中 0 <= xi <= 255 且 xi 不能包含 前导零。例如:
 * “192.168.1.1” 、 “192.168.1.0” 为有效IPv4地址， “192.168.01.1” 为无效IPv4地址;
 * “192.168.1.00” 、 “192.168@1.1” 为无效IPv4地址。
 *
 * 一个有效的IPv6地址 是一个格式为“x1:x2:x3:x4:x5:x6:x7:x8” 的IP地址，其中:
 *
 *
 * 1 <= xi.length <= 4
 * xi 是一个 十六进制字符串 ，可以包含数字、小写英文字母( 'a' 到 'f' )和大写英文字母( 'A' 到 'F' )。
 * 在 xi 中允许前导零。
 *
 *
 * 例如 "2001:0db8:85a3:0000:0000:8a2e:0370:7334" 和
 * "2001:db8:85a3:0:0:8A2E:0370:7334" 是有效的 IPv6 地址，而
 * "2001:0db8:85a3::8A2E:037j:7334" 和
 * "02001:0db8:85a3:0000:0000:8a2e:0370:7334" 是无效的 IPv6 地址。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：queryIP = "172.16.254.1"
 * 输出："IPv4"
 * 解释：有效的 IPv4 地址，返回 "IPv4"
 *
 *
 * 示例 2：
 *
 *
 * 输入：queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * 输出："IPv6"
 * 解释：有效的 IPv6 地址，返回 "IPv6"
 *
 *
 * 示例 3：
 *
 *
 * 输入：queryIP = "256.256.256.256"
 * 输出："Neither"
 * 解释：既不是 IPv4 地址，又不是 IPv6 地址
 *
 *
 *
 *
 * 提示：
 *
 *
 * queryIP 仅由英文字母，数字，字符 '.' 和 ':' 组成。
 *
 *
 */

// @lc code=start
function isNumber(char) {
  return +char >= 0 && +char <= 9;
}
function isIPv4(ip) {
  const len = ip.length;
  // 首尾必须是数字
  if (!isNumber(ip[0]) || !isNumber(ip[len - 1])) return false;

  const segments = [];
  let segment = "";

  // 遍历，解析各段
  for (let index = 0; index < len; index++) {
    const c = ip[index];
    // 合法字符是数字和.
    if (c !== "." && !isNumber(c)) return false;

    // 解析到地址
    if (c !== ".") {
      // 前导 0 不合法
      if (segment[0] === "0") {
        return false;
      }
      segment += c;
    }

    // 遇到. 或者 到达末尾 说明上个段结束
    if (index === len - 1 || c === ".") {
      // 检查 segment 是否合法
      if (segment === "") return false;
      if (+segment < 0 || +segment > 255) return false;
      segments.push(segment);
      segment = "";
    }
  }

  // console.log(segments);
  return segments.length === 4;
}
function isHex(char) {
  return (
    (char >= "0" && char <= "9") ||
    (char >= "A" && char <= "F") ||
    (char >= "a" && char <= "f")
  );
}
function isIPv6(ip) {
  const len = ip.length;
  // 首尾必须是有效的 16 进制符号
  if (!isHex(ip[0]) || !isHex(ip[len - 1])) return false;

  const segments = [];
  let segment = "";

  // 遍历，解析各段
  for (let index = 0; index < len; index++) {
    const c = ip[index];
    // 合法字符是 16 进制符号、:
    if (c !== ":" && !isHex(c)) return false;

    // 解析到地址
    if (c !== ":") {
      segment += c;
    }

    // 遇到. 或者 到达末尾 说明上个段结束
    if (index === len - 1 || c === ":") {
      // 检查 segment 是否合法
      if (segment.length < 1 || segment.length > 4) return false;
      segments.push(segment);
      segment = "";
    }
  }

  // console.log(segments);
  return segments.length === 8;
}
/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  if (queryIP.indexOf(".") !== -1) {
    return isIPv4(queryIP) ? "IPv4" : "Neither";
  } else {
    return isIPv6(queryIP) ? "IPv6" : "Neither";
  }
};
// console.log(validIPAddress("172.16.254.1"));
// console.log(validIPAddress("256.256.256.256"));
// console.log(validIPAddress("1e1.4.5.6"));
// console.log(validIPAddress("12..33.4"));
// console.log(validIPAddress("12.3.4"));
// console.log(validIPAddress("172.16.204.1"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334:"));
// console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"));

// @lc code=end
