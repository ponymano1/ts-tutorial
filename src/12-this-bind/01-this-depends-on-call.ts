console.log('12-01')
/**
 * this 只和“谁调用函数”有关
 * 和函数写在哪、定义在哪没有关系
 * 参数里的this 只是表明是个是个obj,里面至少有name属性
 */

function showName(this: { name: string }) {
  console.log(this.name)
}

const a = {
  name: 'Alice',
  showName,
}

const b = {
  name: 'Bob',
  showName,
}

a.showName() // Alice
b.showName() // Bob
