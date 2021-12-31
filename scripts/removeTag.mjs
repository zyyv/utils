import { $ } from 'zx'

const result = await $`git tag`
const tags = result.stdout.split('\n')

tags.forEach(async(tag) => {
  await $`git tag -d ${tag}`
  await $`git push origin :${tag}`
})
