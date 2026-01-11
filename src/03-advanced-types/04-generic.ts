/**
 * 泛型（Generic）
 *
 * 作用：
 * - 在调用时才确定类型
 * - 保留类型信息
 */

// T 是一个占位符类型
function identity<T>(value: T): T {
  return value
}

// 自动推断类型
console.log(identity(1))
console.log(identity('hello'))
