/**
 * interface（接口）
 *
 * 用途：
 * - 描述对象的结构
 * - 非常适合定义「参数 / 返回值 / 数据结构」
 */

// 定义一个接口
interface User {
  name: string
  age: number
  city?: string // 可选属性
}

// 使用接口约束对象
const user: User = {
  name: 'Tom',
  age: 18,
}

console.log(user)
