import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// 获取根目录
const baseUrl = fileURLToPath(new URL('.', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob: ['**/demos/*.vue'], // 根目录下所有的demos的vue文件
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^vue-magic-ui/,
        replacement: path.resolve(baseUrl, 'packages/vue-magic-ui/src'),
      },

      {
        find: /^@vue-magic-ui\/utils/,
        replacement: path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
