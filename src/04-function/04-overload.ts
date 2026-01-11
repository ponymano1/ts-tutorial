/**
 * 函数重载
 *
 * - 对外暴露多个函数签名
 * - 内部用一个实现
 */

function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: any, b: any) {
  return a + b
}

console.log(add(1, 2))
console.log(add('a', 'b'))
