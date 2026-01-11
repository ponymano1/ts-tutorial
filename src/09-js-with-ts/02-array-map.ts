/**
 * Array.map + TypeScript 类型推断
 *
 * map：对数组进行「映射」
 */

interface User {
  id: number
  name: string
}

const users: User[] = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Jerry' },
]

// TS 自动推断 item 是 User
const names = users.map((user) => {
  return user.name
})

// names 的类型是 string[]
console.log(names)
