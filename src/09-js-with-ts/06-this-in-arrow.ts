/**
 * 箭头函数中的 this
 */

class Counter {
  count = 0

  // 箭头函数：this 指向当前实例
  inc = () => {
    this.count++
  }
}

const c = new Counter()
const fn = c.inc

// 不会丢失 this
fn()
console.log(c.count) // 1
