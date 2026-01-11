/**
 * 闭包：看函数在哪定义
 * this：看函数怎么调用
 */

// ✅ 闭包示例
function createCounter() {
  let count = 0

  return function () {
    count++
    console.log('closure:', count)
  }
}

const counter = createCounter()
counter()
counter()

// ✅ 闭包 + this 对照
function outer() {
  const name = 'Tom'

  return function () {
    console.log('closure:', name)
    console.log('this:', this?.name)
  }
}

const fn = outer()

fn() // closure: Tom, this: undefined

const obj = {
  name: 'Jerry',
  fn,
}

obj.fn() // closure: Tom, this: Jerry
