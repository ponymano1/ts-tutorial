/**
 * call / apply
 * 本质：手动指定“点号左边是谁”
 * call 和 apply 的区别在于参数的传递方式不同,
 * call 是直接一个一个传递参数,而 apply 是传递一个数组
 */

function greet(this: { name: string }, msg: string) {
  console.log(msg, this.name)
}

const user = { name: 'Tom' }

// call：参数一个个传
greet.call(user, 'hello')

// apply：参数用数组传
greet.apply(user, ['hi'])
