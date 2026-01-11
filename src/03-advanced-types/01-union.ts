/**
 * 联合类型（Union）
 *
 * 一个变量可以是多种类型之一
 */

function printId(id: number | string) {
  // 在使用前通常需要类型判断
  console.log(id)
}

printId(1)
printId('abc')
