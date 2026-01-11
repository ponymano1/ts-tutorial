/**
 * filter(Boolean) 的坑
 */

const arr = [0, 1, undefined, 2]

// ❌ TS 不知道你在过滤 undefined
const r1 = arr.filter(Boolean)

// ✅ 显式类型保护
const r2 = arr.filter((v): v is number => v !== undefined)

console.log(r1, r2)
