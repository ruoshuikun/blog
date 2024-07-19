import {defineConfig} from 'vitepress'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar";
// import { sidebar } from './sidebar.mts';
// console.log('sidebar', sidebar)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ruoshuikun-blog",
  description: "ruoshuikun的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      // { text: 'Examples', link: '/markdown-examples' },
      // { text: 'Config', link: '/config' },
      // { text: 'Git', link: '/git' },
      // { text: 'Vue', link: '/vue' },
      { text: 'KuangStudy', link: '/kuang-study' },
    ],
    // sidebar,
    sidebar: {
      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          items: [
            {text: 'Index', link: '/config/'},
            {text: 'Three', link: '/config/three'},
            {text: 'Four', link: '/config/four'}
          ]
        }
      ],
      '/git/': [
        {
          text: 'Git',
          items: [
            {text: '常用命令', link: '/git/'},
            {text: 'Two', link: '/git/two'}
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue',
          items: [
            {text: '常用命令', link: '/vue/'},
          ]
        }
      ],
      '/kuang-study/': [
        {
          text: 'Go',
          items: [
            { text: '全栈课程', link: '/kuang-study/' },
            { text: '认识Go语言', link: '/kuang-study/1/1' },
            { text: 'Go语言语法', link: '/kuang-study/1/2' },
          ]
        }
      ],
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  },
  vite: {
    plugins: [
      // add plugin
      // AutoSidebar({
      //   ignoreList: ["README.md"], // 忽略文件夹
      //   path: "notes", // 侧边栏扫描路径(也就是所有笔记所在的目录)
      //   ignoreIndexItem: true, // 忽略首页
      //   collapsed: false, // 是否启用折叠，默认为false展开
      //   deletePrefix: "notes", // 删除路径前缀
      //   sideBarResolved(data) {
      //     // 接收完整的侧边栏对象以进行自定义修改
      //     console.log('data', data.item)
      //     return data;
      //   },
      //   sideBarItemsResolved(data) {
      //     // 接收完整的侧边栏 subItem 对象以进行自定义修改
      //
      //     return data;
      //   },
      //   beforeCreateSideBarItems(data) {
      //     // 获取生成侧边栏子项之前扫描的文件名列表。如果要对侧边栏数据进行排序，建议使用
      //     return data;
      //   },
      //   titleFromFile: true, // 从文件中提取标题
      //   // You can also set options to adjust sidebar data
      //   // see option document below
      // }),
    ]
  }
})
