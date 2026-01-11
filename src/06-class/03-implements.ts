/**
 * implements
 *
 * 类实现接口
 */

interface Flyable {
  fly(): void
}

class Bird implements Flyable {
  fly() {
    console.log('flying...')
  }
}

new Bird().fly()
