module.export = {
  title: 'easyDraw',
  description: 'vue3的ui库,让前端人员可以快速开发',
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
    ['meta', { name: 'keywords', content: 'easy draw ui' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  headers: [
    { level: 1, title: '123', slug: 'site' },
    { level: 2, title: '123', slug: '123' },
  ],
  themeConfig: {
    logo: '/images/vue.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-PRESENT easyDraw and easyDraw contributors'
    },
    algolia: {
      apiKey: '我的apiKey',
      indexName: '首页名称'
    },
    nav: [
      { text: '指南', link: '/guide/design' },
      { text: '组件', link: '/component/button' }
    ],
    socialLinks: [{ icon: 'github', link: 'https://www.baidu.com' }],
    navbar: {
      title: '123'
    },
    sidebar: {
      '/guide/': [],
      '/component/': [
        {
          text: '基础',
          items: [
            {
              text: '按钮-button',
              link: '/component/button'
            }
          ]
        }
      ]
    },
    search: true,
  }
}