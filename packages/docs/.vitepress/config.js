export default {
  title: 'EasyDrawUI',
  description: '基于vue3的ui库,让前端人员可以快速开发交付ui',
  base: '/easy-draw-ui/',
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'easy draw ui 轻松画出你的ui界面!!!' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/sitelogo.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT easyDraw and easyDraw contributors'
    },
    algolia: {
      apiKey: '我的apiKey',
      indexName: '首页名称'
    },
    nav: [
      { text: '指南', link: '/guide/index' },
      { text: '组件', link: '/component/button' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Tao0929' }],
    sidebar: {
      '/guide/': [],
      '/component/': [
        {
          text: '基础组件',
          items: [
            {
              text: '按钮组件-Button',
              link: '/component/button'
            }
          ]
        }
      ]
    },
    search: true,
  }
}