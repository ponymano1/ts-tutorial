/**
 * any vs unknown
 *
 * any：
 * - 放弃类型检查
 * - TS 不会报任何错误
 * - 非必要不要用
 *
 * unknown：
 * - 不知道类型，但必须先判断再使用
 * - 比 any 安全
 */

// any：可以做任何操作（危险）
let a: any = 1
//a.foo.bar() // ✅ 编译通过，但运行可能直接崩溃

// unknown：必须先做类型收窄
let b: unknown = 1

// b.toFixed(); ❌ 编译错误

if (typeof b === 'number') {
  // 在这个作用域中，b 被收窄成 number
  console.log(b.toFixed(2))
}
