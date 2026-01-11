/**
 * 解构 + 剩余属性
 */

const user = { name: 'Tom', age: 18, city: 'Beijing' }

// rest 收集剩余属性
const { name, ...rest } = user

console.log(name)
console.log(rest) // { age: 18, city: 'Beijing' }
