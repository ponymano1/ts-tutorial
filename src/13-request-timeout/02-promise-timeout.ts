/**
 * 02 - promise timeout
 *
 * 使用 Promise.race 实现超时
 * 请求本身仍会在后台继续执行
 */

function timeout(ms: number): Promise<never> {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms))
}

async function run() {
  try {
    await Promise.race([fetch('https://httpbin.org/delay/5'), timeout(2000)])
  } catch (e) {
    console.log('caught:', (e as Error).message)
  }
}

run()
