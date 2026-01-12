/**
 * 一次性定时任务
 *
 * - 延迟执行一次
 * - 执行完即结束
 */

function job() {
  console.log('run at', new Date().toISOString())
}

setTimeout(job, 2000)
