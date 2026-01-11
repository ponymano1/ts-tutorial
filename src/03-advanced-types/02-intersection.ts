/**
 * 交叉类型（Intersection）
 *
 * 多个类型合并为一个
 */

type A = { x: number }
type B = { y: number }

// C 同时拥有 x 和 y
type C = A & B

const c: C = { x: 1, y: 2 }
console.log(c)
