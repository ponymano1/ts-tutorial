/**
 * Promise.all
 *
 * TS 可以推断出「元组类型」
 */

// 不需要加async,因为Promise.all会自动包装成Promise
// async的唯一作用就是将返回值包装成Promise，当然，这里加了也不会报错
function delay(ms: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve(`delay ${ms}`), ms)
  })
}

async function run() {
  const result = await Promise.all([delay(100), delay(200)])

  // result: [string, string]
  console.log(result[0], result[1])
}

function fail(): Promise<string> {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error('fail')), 100)
  })
}

//写一个allsettled使用，包含成功和失败
async function allSettledRun() {
  console.log('allSettledRun')
  const result = await Promise.allSettled([delay(100), delay(200), fail()])

  // result: [{status: 'fulfilled', value: string}, {status: 'rejected', reason: Error}]
  console.log(result[0], result[1], result[2])
  result.forEach((item) => {
    if (item.status === 'fulfilled') {
      console.log(item.value)
    } else {
      console.log(item.reason)
    }
  })
}

run()
allSettledRun()
