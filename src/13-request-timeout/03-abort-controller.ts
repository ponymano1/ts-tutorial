/**
 * 03 - abort controller
 *
 * 主动 abort 一个 fetch 请求
 */

async function run() {
  const controller = new AbortController()

  setTimeout(() => {
    controller.abort()
    console.log('abort called')
  }, 2000)

  try {
    await fetch('https://httpbin.org/delay/10', {
      signal: controller.signal,
    })
  } catch (e: any) {
    console.log('caught:', e.name)
  }
}

run()
