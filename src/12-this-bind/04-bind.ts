/**
 * bind 不会执行函数
 * 只会返回一个 this 被固定的新函数
 * bind = 以后再用这个函数, this 就是传入的参数
 */

function show(this: { name: string }) {
  console.log(this.name)
}

const user = { name: 'Tom' }

//bind的时候不会执行函数,只是返回一个新函数
const boundShow = show.bind(user)

boundShow() // Tom
