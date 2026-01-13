/**
 * filter(Boolean) 的坑
 */

const arr = [0, 1, undefined, 2]

// ❌ TS 不知道你在过滤 undefined
const r1 = arr.filter(Boolean)

// ✅ 显式类型保护
// 这里v is number是类型保护，告诉TSv一定是number类型，谓词保护
// （v）是数组里的数，:表示v的类型是number
const r2 = arr.filter((v): v is number => v !== undefined)

console.log(r1, r2)
