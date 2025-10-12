/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [
      { text: '计算机系统与程序设计', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.md' },
      { text: '人工智能与机器学习', link: '/dezeming/人工智能与机器学习/人工智能与机器学习.md' },
    ]
  },
])
