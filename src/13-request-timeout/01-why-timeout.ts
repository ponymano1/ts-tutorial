/**
 * 01 - why timeout
 *
 * 请求一个会延迟 10 秒返回的接口
 * 运行后可以看到：程序会一直等
 */

async function run() {
  console.log('request start')

  await fetch('https://httpbin.org/delay/10')

  console.log('request finished')
}

run()
