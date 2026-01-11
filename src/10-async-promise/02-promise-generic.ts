/**
 * Promise + 泛型
 *
 * 在封装异步函数时一定要写清楚返回类型
 */

interface User {
  id: number
  name: string
}

function fetchUser(): Promise<User> {
  return new Promise((resolve) => {
    resolve({ id: 1, name: 'Tom' })
  })
}

fetchUser().then((user) => {
  // user 是 User
  console.log(user.name)
})
