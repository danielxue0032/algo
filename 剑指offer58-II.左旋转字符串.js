// var reverseLeftWords = function (s, n) {
//   return (s + s).substring(n, s.length + n)
// }

var reverseLeftWords = function (s, n) {
  const arr = Array.from(s)
  reverse(arr, 0, n - 1)
  reverse(arr, n, arr.length - 1)
  reverse(arr, 0, arr.length - 1)
  return arr.join('')
}
var reverse = function (arr, start, end) {
  let left = start
  let right = end
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
}

console.log(reverseLeftWords('lrloseumgh', 6)) // umghlrlose

