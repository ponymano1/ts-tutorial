/**
 * Promise 基础
 *
 * Promise 表示一个「未来才会完成的值」
 */

const p = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100)
    // reject(new Error("fail"));
  }, 500)
})

// then 中的 value 会被自动推断为 number
p.then((value) => {
  console.log('value:', value)
})
