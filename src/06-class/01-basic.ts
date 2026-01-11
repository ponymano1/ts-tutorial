/**
 * class 基础
 */

class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const p = new Person('Tom')
console.log(p.name)
