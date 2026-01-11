/**
 * TS 基础类型
 *
 * TypeScript 在 JS 的基础上增加了「类型」
 * 类型在编译阶段生效，不影响运行时
 */

// number 类型
let num: number = 1

// string 类型
let str: string = 'hello'

// boolean 类型
let bool: boolean = true

// TS 编译后，这些类型都会被移除
console.log(num, str, bool)
