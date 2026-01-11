/**
 * 可选参数
 *
 * ? 表示参数可以不传
 */

function log(msg: string, prefix?: string) {
  console.log(prefix, msg)
}

log('hello')
log('hello', 'INFO')
