/**
 * 异步错误处理
 */

async function mayFail(flag: boolean) {
  if (flag) {
    throw new Error('boom')
  }
  return 'ok'
}

async function run() {
  try {
    const res = await mayFail(true)
    console.log(res)
  } catch (err) {
    // err 的类型是 unknown
    if (err instanceof Error) {
      console.error(err.message)
    }
  }
}

run()
