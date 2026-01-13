/**
 * async / await
 * async 的唯一作用就是将返回值包装成 Promise
 * async 函数一定返回 Promise
 *
 */

async function getNumber() {
  return 42
}

// 等价于 Promise<number>
getNumber().then((n) => console.log(n))

async function main() {
  const n = await getNumber()
  console.log('await:', n)
}

main()
