/**
 * 非空断言（!）
 *
 * 确定值一定不是 null / undefined
 *
 * ⚠️ 注意：非空断言只是告诉 TypeScript 编译器"相信我，这个值不是 null/undefined"
 * 但不会在运行时进行实际检查！
 *
 * 如果实际值为 null/undefined，会在运行时抛出错误：
 * TypeError: Cannot read property 'value' of null
 */

const input = document.querySelector('input')!
input.value = 'hello'

// 如果页面上没有 input 元素，上面的代码会报错：
// TypeError: Cannot read property 'value' of null

// 更安全的做法是使用可选链或条件判断：
// const input = document.querySelector('input')
// if (input) {
//   input.value = 'hello'
// }
