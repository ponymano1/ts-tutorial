/**
 * 剩余参数（Rest）
 *
 * 用于接收不定数量的参数
 */

function sum(...nums: number[]) {
  return nums.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2, 3))
