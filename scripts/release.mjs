/* eslint-disable @typescript-eslint/no-var-requires */
import { execSync } from 'child_process'
import fs from 'fs-extra'
import { $ } from 'zx'

execSync('pnpm exec bumpp package.json', {
  stdio: 'inherit'
})

await $`pnpm changelog`

await $`pnpm -r publish --access public --no-git-checks`

const { version } = await fs.readJSON('package.json')

await $`git add .`
await $`git commit -m "chore: release v${version}"`
await $`git tag v${version}`
await $`git push`
await $`git push origin --tags`
