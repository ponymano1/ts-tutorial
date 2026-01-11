/**
 * this 在 TS 中是“假的参数”
 * 只用于类型检查
 *
 * this 只影响类型，不是真参数
 */

// ✅ 显式声明 this 类型
function print(this: { id: number }) {
  console.log(this.id)
}

print.call({ id: 1 })

// ✅ 禁止使用 this
function add(this: void, a: number, b: number) {
  return a + b
}

add(1, 2)
// add.call({}, 1, 2); // ❌ TS 会报错
