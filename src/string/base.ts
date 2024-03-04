const urlAlphabet = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'
/**
 * Generate a random string
 * 生成随机字符串
 *
 * @category String
 */
export function randomStr(size = 16, dict = urlAlphabet): string {
  let id = ''
  let i = size
  const len = dict.length
  while (i--)
    id += dict[(Math.random() * len) | 0]
  return id
}

export default {
  randomStr,
}
