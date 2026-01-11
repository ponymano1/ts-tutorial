/**
 * 内置工具类型
 *
 * Partial  - 所有属性可选
 * Pick     - 选取部分属性
 * Omit     - 排除某些属性
 */

type User = {
  id: number
  name: string
  age: number
}

const u1: Partial<User> = {
  name: 'Tom',
}

const u2: Pick<User, 'id' | 'name'> = {
  id: 1,
  name: 'Tom',
}

const u3: Omit<User, 'age'> = {
  id: 2,
  name: 'Jerry',
}

console.log(u1, u2, u3)
