/**
 * type（类型别名）
 *
 * type 更灵活：
 * - 联合类型
 * - 基础类型别名
 */

type ID = string | number

type User = {
  id: ID
  name: string
}

const u: User = {
  id: 1,
  name: 'Tom',
}

console.log(u)
