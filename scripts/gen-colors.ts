import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import fs from 'node:fs'
import { gold, green, magenta, red } from '@ant-design/colors'

let colors = ''

magenta.forEach((color, index) => {
  colors += `--magic-color-primary-${index + 1}:${color}; \n`
})

colors += '\n'

green.forEach((color, index) => {
  colors += `--magic-color-success-${index + 1}:${color}; \n`
})
colors += '\n'

gold.forEach((color, index) => {
  colors += `--magic-color-warning-${index + 1}:${color}; \n`
})

colors += '\n'

red.forEach((color, index) => {
  colors += `--magic-color-error-${index + 1}:${color}; \n`
})

const baseUrl = fileURLToPath(new URL('../', import.meta.url))

const cssFilePath = path.resolve(baseUrl, 'packages/vue-magic-ui/src/styles/theme/colors.scss')

fs.writeFileSync(cssFilePath, `:root{\n${colors}\n}`)

console.log('colors write success')
