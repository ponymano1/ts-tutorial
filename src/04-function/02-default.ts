/**
 * 默认参数
 *
 * 当参数为 undefined 时使用默认值
 */

function log(msg: string, prefix = 'INFO') {
  console.log(prefix, msg)
}

log('hello')
