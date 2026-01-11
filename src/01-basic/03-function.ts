/**
 * 函数类型
 *
 * - 参数类型写在参数后
 * - 返回值类型写在参数列表后
 */

function add(a: number, b: number): number {
  return a + b
}

// TS 会检查传参和返回值
console.log(add(1, 2))
// add("1", 2); ❌
