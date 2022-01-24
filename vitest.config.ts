import { resolve } from 'path'
import { defineConfig } from 'vite'

const r = (p: string) => resolve(__dirname, p)

export default defineConfig({
  alias: {
    '@utils': r('./src/'),
    '@utils/array': r('./src/array/'),
    '@utils/base': r('./src/base/'),
    '@utils/date': r('./src/date/'),
    '@utils/function': r('./src/function/'),
    '@utils/is': r('./src/is/'),
    '@utils/object': r('./src/object/'),
  },
})
