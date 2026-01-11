/**
 * 访问修饰符
 *
 * public   - 默认，外部可访问
 * private  - 只能在类内部访问
 */

class User {
  public name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  getAge() {
    return this.age
  }
}

const u = new User('Tom', 18)
console.log(u.name)
console.log(u.getAge())
// u.age ❌
