/**
 * Array.filter
 *
 * filter 会缩小（收窄）类型
 */

interface User {
  id: number
  age: number
}

const users: User[] = [
  { id: 1, age: 12 },
  { id: 2, age: 20 },
]

// 过滤成年人
const adults = users.filter((user) => user.age >= 18)

// adults 类型仍然是 User[]
console.log(adults)
