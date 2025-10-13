/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { 
    text: '计算机图形学', 
    items: [
      { text: '初级渲染技术-代码构建', link: '/dezeming/计算机图形学/计算机图形学.html#初级渲染技术-代码构建' },
      { text: '高级渲染器系列-原理与代码实现', link: '/dezeming/计算机图形学/计算机图形学.html#高级渲染器系列-原理与代码实现' },
      { text: '图形渲染-数学原理与程序代码', link: '/dezeming/计算机图形学/计算机图形学.html#图形渲染-数学原理与程序代码' },
      { text: '神经网络渲染与逆渲染', link: '/dezeming/计算机图形学/计算机图形学.html#神经网络渲染与逆渲染' },
      { text: '可视化技术-数学原理与代码实现', link: '/dezeming/计算机图形学/计算机图形学.html#可视化技术-数学原理与代码实现' },
      { text: '几何与建模-数学原理与代码实现', link: '/dezeming/计算机图形学/计算机图形学.html#几何与建模-数学原理与代码实现' }
    ]
  },
  { 
    text: '计算机视觉', 
    items: [
      { text: 'OpenCV源码详解', link: '/dezeming/计算机视觉/计算机视觉.html#opencv源码详解' },
      { text: '颜色空间理论', link: '/dezeming/计算机视觉/计算机视觉.html#颜色空间理论' },
      { text: '图像特征与特征匹配', link: '/dezeming/计算机视觉/计算机视觉.html#图像特征与特征匹配' },
      { text: '图像质量评价（IQA）', link: '/dezeming/计算机视觉/计算机视觉.html#图像质量评价' },
      { text: '图像去噪与滤波', link: '/dezeming/计算机视觉/计算机视觉.html#图像去噪与滤波' },
      { text: '图像分割（与边缘、轮廓提取）', link: '/dezeming/计算机视觉/计算机视觉.html#图像分割（与边缘、轮廓提取）' },
      { text: '图像编辑（图像融合、抠图、图像增强等）', link: '/dezeming/计算机视觉/计算机视觉.html#图像编辑（图像融合、抠图、图像增强等）' },
      { text: '目标定位与跟踪', link: '/dezeming/计算机视觉/计算机视觉.html#目标定位与跟踪' },
      { text: '图像三维重建和三维理解', link: '/dezeming/计算机视觉/计算机视觉.html#图像三维重建和三维理解' }
    ]
  },
  { 
    text: '应用数学原理', 
    items: [
      { text: '函数与微积分', link: '/dezeming/应用数学原理/应用数学原理.html#函数与微积分' },
      { text: '矩阵分析与应用', link: '/dezeming/应用数学原理/应用数学原理.html#矩阵分析与应用' },
      { text: '概率统计与随机过程', link: '/dezeming/应用数学原理/应用数学原理.html#概率统计与随机过程' },
      { text: '信号分析', link: '/dezeming/应用数学原理/应用数学原理.html#信号分析' },
      { text: '小波分析', link: '/dezeming/应用数学原理/应用数学原理.html#小波分析' },
      { text: '复数域与复数方法', link: '/dezeming/应用数学原理/应用数学原理.html#复数域与复数方法' }
    ]
  },
  { 
    text: '数据结构与算法', 
    items: [
      { text: '基础算法集合', link: '/dezeming/数据结构与算法/数据结构与算法.html#基础算法集合' },
      { text: '树结构与算法', link: '/dezeming/数据结构与算法/数据结构与算法.html#树结构与算法' },
      { text: '图结构与算法', link: '/dezeming/数据结构与算法/数据结构与算法.html#图结构与算法' }
    ]
  },
  { 
    text: '人工智能与机器学习', 
    items: [
      { text: '重要的机器学习方法', link: '/dezeming/人工智能与机器学习/人工智能与机器学习.html#重要的机器学习方法' },
      { text: '深度学习-原理与代码实现', link: '/dezeming/人工智能与机器学习/人工智能与机器学习.html#深度学习-原理与代码实现' }
    ]
  },
  { 
    text: '计算机系统与程序设计', 
    items: [
      { text: '计算机体系结构', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.html#计算机体系结构' },
      { text: '计算机程序理论', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.html#计算机程序理论' },
      { text: '程序设计与编程语言', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.html#程序设计与编程语言' },
      { text: '操作系统', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.html#操作系统' },
      { text: '嵌入式自控系统设计实例', link: '/dezeming/计算机系统与程序设计/计算机系统与程序设计.html#嵌入式自控系统设计实例' }
    ]
  }
])
