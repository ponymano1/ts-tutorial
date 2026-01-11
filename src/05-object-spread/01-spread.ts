/**
 * 展开运算符（Spread）
 *
 * - 用于对象 / 数组拷贝
 * - 是浅拷贝
 */

const a = { x: 1, y: 2 }
const b = { ...a, y: 99 }

console.log(b) // { x: 1, y: 99 }
