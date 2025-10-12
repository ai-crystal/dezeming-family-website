/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '计算机图形学', link: '/dezeming/计算机图形学/计算机图形学.md' },
  { text: '计算机视觉', link: '/dezeming/计算机视觉/计算机视觉.md' },
  { text: '应用数学原理', link: '/dezeming/应用数学原理/应用数学原理.md' },
  { text: '数据结构与算法', link: '/dezeming/数据结构与算法/数据结构与算法.md' },
  { text: '人工智能与机器学习', link: '/dezeming/人工智能与机器学习/人工智能与机器学习.md' },
  { text: '计算机系统与程序设计', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.md' },
])
