/**
 * 链式调用调试技巧
 */

const nums = [1, 2, 3, 4]

const result = nums
  .map((n) => n * 2)
  .map((n) => {
    console.log('after map:', n)
    return n
  })
  .filter((n) => n > 4)

console.log(result)
