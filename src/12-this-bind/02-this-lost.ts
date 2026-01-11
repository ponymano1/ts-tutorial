/**
 * 当函数脱离对象调用时
 * this 会变成 undefined（严格模式）
 */

const user = {
  name: 'Tom',
  say() {
    console.log(this.name)
  },
}

const fn = user.say
fn() // undefined
