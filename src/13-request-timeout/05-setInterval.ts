/**
 * 周期性定时任务
 *
 * - 每隔固定时间执行
 * - 不关心上一次是否执行完
 */

let count = 0

const timer = setInterval(() => {
  count++
  console.log('tick', count, new Date().toISOString())

  if (count === 5) {
    clearInterval(timer)
    console.log('stopped')
  }
}, 1000)
