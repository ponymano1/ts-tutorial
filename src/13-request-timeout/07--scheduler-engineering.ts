/**
 * 工程级定时任务封装
 *
 * 支持：
 * - start / stop
 * - 间隔执行
 * - 避免重入
 */

class Scheduler {
  private timer?: NodeJS.Timeout
  private running = false

  constructor(
    private job: () => Promise<void> | void,
    private intervalMs: number,
  ) {}

  start() {
    if (this.timer) return

    const loop = async () => {
      if (this.running) return
      this.running = true

      try {
        await this.job()
      } finally {
        this.running = false
        this.timer = setTimeout(loop, this.intervalMs)
      }
    }

    loop()
  }

  stop() {
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = undefined as unknown as NodeJS.Timeout
    }
  }
}

const scheduler = new Scheduler(async () => {
  console.log('job run', new Date().toISOString())
}, 2000)

scheduler.start()

setTimeout(() => {
  scheduler.stop()
  console.log('scheduler stopped')
}, 8000)
