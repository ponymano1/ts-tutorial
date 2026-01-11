/**
 * 箭头函数（Arrow Function）
 *
 * 特点：
 * 1. 语法更简洁
 * 2. 自动绑定 this
 * 3. 非常适合回调函数
 */

// 普通函数
function add1(a: number, b: number): number {
  return a + b
}

// 箭头函数（最常见写法）
const add2 = (a: number, b: number): number => {
  return a + b
}

// 单行可以省略 return
const add3 = (a: number, b: number) => a + b

// TS 会自动推断返回值类型
console.log(add1(1, 2))
console.log(add2(1, 2))
console.log(add3(1, 2))
