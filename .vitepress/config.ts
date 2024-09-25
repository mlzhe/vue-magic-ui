import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue-magic-ui',
  description: 'This is a custom components library from vue',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '按钮',
          link: '/components/button/',
        },
      ],

      '/utils/': [
        {
          text: '类名生成器',
          link: '/utils/gen-class',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/a1345057558/vue-magic-ui' },
    ],
  },
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/vue-magic-ui/src/:comp/(.*)': 'components/:comp/(.*)',
  },
})
