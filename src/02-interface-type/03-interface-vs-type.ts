/**
 * interface vs type
 *
 * interface：
 * - 可以重复声明（会合并）
 * - 更适合对象结构
 *
 * type：
 * - 不能重复声明
 * - 更适合复杂类型
 */

// interface 会自动合并
interface A {
  x: number
}

interface A {
  y: number
}

const a: A = { x: 1, y: 2 }

// type 不能重复定义
type B = { x: number }
// type B = { y: number }; ❌

console.log(a)
