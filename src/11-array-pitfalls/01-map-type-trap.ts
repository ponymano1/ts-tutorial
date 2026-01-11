/**
 * map 类型陷阱
 */

const nums = [1, 2, 3]

// ❌ 忘记 return
const wrong = nums.map((n) => {
  n * 2
})

// wrong: void[]
console.log(wrong)

// ✅ 正确
const right = nums.map((n) => n * 2)
console.log(right)
