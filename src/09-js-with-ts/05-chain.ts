/**
 * 链式调用（真实业务写法）
 */

interface User {
  name: string
  age: number
}

const users: User[] = [
  { name: 'Tom', age: 20 },
  { name: 'Jerry', age: 16 },
  { name: 'Lucy', age: 30 },
]

const result = users
  .filter((u) => u.age >= 18)
  .map((u) => u.name)
  .reduce((acc, name) => {
    acc.push(name.toUpperCase())
    return acc
  }, [] as string[])

console.log(result)
