/**
 * 类型断言（as）
 *
 * 告诉 TS：“我比你更清楚类型”
 */

const el = document.getElementById('app') as HTMLDivElement | null

if (el) {
  el.innerText = 'hello'
}
