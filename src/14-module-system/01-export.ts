/**
 * 总揽：新项目优先用 ES Module，使用import/export语法
 *
 * 命名导出
 *
 * - 可以导出多个
 * - 导入时名字必须一致
 *
 *
 */

export const version = '1.0.0'

export function sum(a: number, b: number) {
  return a + b
}

export class User {
  constructor(public name: string) {}
}
