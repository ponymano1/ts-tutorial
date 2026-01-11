/**
 * 数组和对象的类型写法
 */

// 数组：元素类型 + []
const nums: number[] = [1, 2, 3]

// 对象：明确每个字段的类型
const user: { name: string; age: number } = {
  name: 'Tom',
  age: 18,
}

console.log(nums, user)
