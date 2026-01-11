/**
 * 回调 ≈ 脱离对象调用 => this 会丢失
 * 回调函数的本质：
 * 函数被“单独拿出来执行”
 *
 * 推荐使用箭头函数
 */

class Counter {
  count = 0

  inc() {
    this.count++
    console.log(this.count)
  }
}

const c = new Counter()

// this 会丢失
setTimeout(c.inc, 1000)

// ✅ 正确写法 1：bind
setTimeout(c.inc.bind(c), 2000)

// ✅ 正确写法 2：箭头函数（推荐）
class SafeCounter {
  count = 0

  inc = () => {
    this.count++
    console.log(this.count)
  }
}

const sc = new SafeCounter()
setTimeout(sc.inc, 3000)
