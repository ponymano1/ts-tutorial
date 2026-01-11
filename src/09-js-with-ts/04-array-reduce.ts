/**
 * Array.reduce
 *
 * reduce 是 TS 最容易写错类型的地方
 */

const nums = [1, 2, 3, 4]

// acc: 累加器
// cur: 当前值
const sum = nums.reduce((acc, cur) => {
  return acc + cur
}, 0)

// sum 是 number
console.log(sum)

/**
 * reduce + 对象
 * 统计单词出现的次数
 * 比如：['a', 'b', 'a', 'c'] -> { a: 2, b: 1, c: 1 }
 *
 */
interface CountMap {
  [key: string]: number
}

const words = ['a', 'b', 'a', 'c']

// acc: 累加器
// cur: 当前值
// acc 的类型是 CountMap
// cur 的类型是 string
const result = words.reduce<CountMap>((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1
  return acc
}, {})

console.log(result) // { a: 2, b: 1, c: 1 }
