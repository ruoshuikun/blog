import { defineConfig } from 'vitepress'
// import { sidebar } from './sidebar.mts';

// console.log('sidebar', sidebar)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ruoshuikun-blog",
  description: "ruoshuikun的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Config', link: '/config' },
      { text: 'Git', link: '/git' },
      { text: 'Vue', link: '/vue' },
      { text: 'KuangStudy', link: '/kuang-study' },
    ],
    // sidebar,
    sidebar: {
      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ],
      '/git/': [
        {
          text: 'Git',
          items: [
            { text: '常用命令', link: '/git/' },
            { text: 'Two', link: '/git/two' }
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue',
          items: [
            { text: '常用命令', link: '/vue/' },
          ]
        }
      ],
      '/kuang-study/': [
        {
          text: 'KuangStudy',
          items: [
            { text: '全栈课程', link: '/kuang-study/' },
            { text: '认识Go语言', link: '/kuang-study/1/1' },
            { text: 'Go语言语法', link: '/kuang-study/1/2' },
          ]
        }
      ],
    },
    /*
        sidebar: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' }
            ]
          }
        ],
    */

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
