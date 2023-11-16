var replaceSpace = function (s) {
  let count = 0
  for (let c of s) {
    if (c === ' ') {
      count++
    }
  }

  if (count === 0) return s

  const res = new Array(s.length + count * 2)
  let left = s.length - 1
  let right = res.length - 1
  while (left >= 0) {
    if (s[left] !== ' ') {
      res[right] = s[left]
    } else {
      res[right--] = '0'
      res[right--] = '2'
      res[right] = '%'
    }
    right--
    left--
  }
  return res.join("")
}

console.log(replaceSpace("We are happy."))