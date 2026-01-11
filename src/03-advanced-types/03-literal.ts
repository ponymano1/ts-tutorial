/**
 * 字面量类型
 *
 * 常用于状态 / 枚举替代方案
 */

let status: 'success' | 'error' | 'loading'

status = 'success'
// status = "done"; ❌

console.log(status)
