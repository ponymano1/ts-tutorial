/**
 * reduce 常见错误
 */

// ❌ 初始值类型不对
const nums = [1, 2, 3]

// const r = nums.reduce((acc, cur) => acc + cur); // 可能报错

// ✅ 推荐写法
const r = nums.reduce<number>((acc, cur) => {
  return acc + cur
}, 0)

console.log(r)
