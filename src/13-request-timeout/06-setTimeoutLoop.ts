/**
 * 推荐写法：setTimeout 循环
 *
 * 特点：
 * - 下一次执行在上一次结束之后
 * - 不会堆积任务
 * - 更容易控制错误和停止
 */

let stopped = false

async function job() {
  console.log('run', new Date().toISOString())
}

async function loop(intervalMs: number) {
  if (stopped) return

  await job()

  setTimeout(() => loop(intervalMs), intervalMs)
}

loop(1000)

setTimeout(() => {
  stopped = true
  console.log('stop loop')
}, 5500)
