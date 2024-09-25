import classNames from 'classnames'

import { computed } from 'vue'

type BEMType = string | [string, 'B' | 'E' | 'M'] | undefined

/**
 * 生成样式的方法
 * @param componentName 组件名称
 */
function useClassName(componentName: string) {
  const prefix = 'magic'

  const componentClass = `${prefix}-${componentName}`

  // 生成类函数
  const gc = (...args: BEMType[]) => {
    if (args.length) {
      return args.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          const arg1 = cur[0]
          const arg2 = cur[1]
          if (arg2 === 'E')
            return `${prev}__${arg1}`
          else if (arg2 === 'M')
            return `${prev}--${arg1}`
        }
        return `${prev}-${cur}`
      }, componentClass)
    }

    return componentClass
  }

  const gce = (e: string) => [e, 'E'] as BEMType
  const gcm = (m: string) => [m, 'M'] as BEMType

  // 使用classnames生成类
  const gcx = (options: () => Record<string, boolean>) => {
    return computed(() => classNames(options()))
  }

  return {
    gc,
    gce,
    gcm,
    gcx,
  }
}

export { useClassName }
