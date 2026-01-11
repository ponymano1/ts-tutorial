/**
 * 回调函数类型
 */

// 回调函数类型定义
type Callback = (value: number) => void

function process(nums: number[], cb: Callback) {
  nums.forEach((n) => cb(n))
}

process([1, 2, 3], (n) => {
  console.log(n * 2)
})
