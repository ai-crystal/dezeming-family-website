---
title: PBRT V3 从零到完全吃透系列
tags:
  - PBRT

PageLayout: 'custom' 
navbar: true
aside: true
outline: [2,4]
---

## PBRT V3-基础理论与代码实战

:::tip
学习PBRT难吗？很多人都说它很难，尤其是不知道如何下手。但是，相信您跟着本系列书，一步一步走下去，就会发现，PBRT其实非常简单，而且，在学习的同时您就能自己构建出一个PBRT系统！我们直接从PBRT3开始学起，尽管相比前两代，第三代增加了很多内容，但跟着本书走，PBRT3并不会很复杂。
:::

::: tip
本书特点：本系列追求通俗易懂，知之而用之。每本小书都能在两三天之内学完，加上代码实现部分学习时间不会超过四天；每学完一本书我们都会把PBRT的实现方法升级到自己的引擎中。虽然PBRT源码较为复杂，但相信跟着本书走，您就会发现PBRT的流程和算法其实非常清晰。跟着本教程不但可以掌握PBRT源码，还希望读者在研究源码的同时，自己动手移植一个PBRT系统。
:::

::: note
本系列于2022年6月下旬开始再版，并于7月17日将《基本理论与代码实战》的16本电子书全部再版完毕，并提供了每本书的源码。

本文源码地址： https://github.com/feimos32/PBRT3-DezemingFamily
:::

::: card title="本文较大的模型资源" icon=" "
::ri:folder-zip-line:: [模型文件-1](\pdfs\PBRT\模型文件-1.zip)

::ri:file-pdf-2-line:: [PBRT系列0-本系列小书的介绍](/pdfs/PBRT/PBRT系列0-本系列小书的介绍.pdf)

希望读者在阅读本系列小书之前，已经实现过《光追三部曲》的轻量级光线追踪器。我们之后会以该轻量级引擎为基础，学习PBRT的实现方式。同时动手移植和实现PBRT引擎到我们自己的系统上。只有当您能够自己根据PBRT来逐步移植实现一个较为复杂的引擎时，才能说您已经真正掌握了PBRT。
:::

::: card title="PBRT入门" icon=" "

本系列包含四本书：明白PBRT的场景文件是怎么使用，以及如何读取到程序中初始化各个类然后启动渲染的；学习PBRT中最简单的Whitted光追源码，并快速实现一个PBRT风格的光线追踪器；掌握PBRT形状类和加速器结构并应用到自己的工程中；掌握和应用PBRT的颜色与光谱结构。

::ri:file-pdf-2-line:: [PBRT系列1 - 文件加载和设定](/pdfs/PBRT/PBRT系列1-文件加载和设定.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列2 - 代码实战：Whitted光线追踪引擎](/pdfs/PBRT/PBRT系列2-代码实战-Whitted光线追踪引擎.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列3 - 代码实战：形状和加速器](/pdfs/PBRT/PBRT系列3-代码实战-形状和加速器.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列4 - 代码实战：颜色与光谱](/pdfs/PBRT/PBRT系列4-代码实战-颜色与光谱.pdf)

:::

::: card title="PBRT进阶" icon=" "
本系列包含六本书：学习和移植PBRT的相机系统。研究PBRT的误差界定原理和内存管理，可以移植误差界定到自己的系统中（不移植也可以，但至少能看懂源码究竟在做什么）。学习和移植PBRT的采样器，比较时钟随机数和低差异序列的优劣。学习PBRT的反射模型，材质和基本的常量纹理，实现漫反射和镜面反射材质，并学习和移植PBRT光源，渲染出基于物理光照的效果。最后我们补充一些之前没有特别注意的比较零散的知识点和内容，作为研究PBRT高阶部分的铺垫。

::ri:file-pdf-2-line:: [PBRT系列5 - 代码实战：相机系统](/pdfs/PBRT/PBRT系列5-代码实战-相机系统.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列6 - 代码实战：误差界定和内存管理](/pdfs/PBRT/PBRT系列6-代码实战-误差界定和内存管理.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列7 - 代码实战：采样器和渲染器](/pdfs/PBRT/PBRT系列7-代码实战-采样器和渲染器.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列8 - 代码实战：反射与材质初步了解](/pdfs/PBRT/PBRT系列8-代码实战-反射与材质初步了解.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列9 - 代码实战：灯光基础与完整的光线追踪器](/pdfs/PBRT/PBRT系列9-代码实战-灯光基础与完整的光线追踪器.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列10 - 代码实战：一些零散和琐碎的内容补充](/pdfs/PBRT/PBRT系列10-代码实战-一些零散和琐碎的内容补充.pdf)

:::

::: card title="PBRT高级" icon=" "
本系列包含六本书：学习PBRT的路径追踪器原理，实现完整的路径追踪系统。学习PBRT中的微表面材质，简单了解原理，并移植测试成功。实现完整的基于重要性采样和MIPMap的无限面光源。学习和实现PBRT中光线微分原理，并实现模型与纹理读取与加载。实现PBRT的参与介质的表示以及体渲染算法。

::ri:file-pdf-2-line:: [PBRT系列11 - 代码实战：路径追踪](/pdfs/PBRT/PBRT系列11-代码实战-路径追踪.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列12 - 代码实战：微表面材质](/pdfs/PBRT/PBRT系列12-代码实战-微表面材质.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列13 - 代码实战：无限面光源](/pdfs/PBRT/PBRT系列13-代码实战-无限面光源.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列14 - 代码实战：光线微分与纹理](/pdfs/PBRT/PBRT系列14-代码实战-光线微分与纹理.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列15 - 代码实战：参与介质与体渲染](/pdfs/PBRT/PBRT系列15-代码实战-参与介质与体渲染.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列16 - 系统功能扩展：复杂模型的读取接口](/pdfs/PBRT/PBRT系列16-系统功能扩展-复杂模型的读取接口.pdf)

:::

## PBRT V3-专业知识理论与代码实战

基础知识部分只是告诉读者PBRT的实现和基本原理，但对于一些复杂模型的原理和算法原理并没有详细介绍。专业知识系列则会重点剖析这些复杂算法和模型，例如物理材质、概率方法等，并深入讲解源码的实现过程。学完基础知识部分以后，您已经完全熟悉了PBRT的工作方式和程序结构，并能够移植和实现PBRT系统到自己的系统里，但想必对于算法具体细节和原理您还会有很多疑问，本系列将会为您一一进行解答。

本系列于2022年7月中下旬开始正式写作，并全部配套包含Qt GUI界面的源码。

代码链接： [Github源码链接](https://github.com/feimos32/PBRT3-ProfessionalTheory-DezemingFamily)

::: card title="PBRT专业理论与代码实战" icon=" "
本系列内容包含了各种PBRT更高阶的知识和应用理论（但不代表会更难），这些系列书不但有基本原理的全面详细的讲解（比如物理材质），还包括了一些附加功能的实现（例如透明贴图、实例化等）。

::ri:file-pdf-2-line:: [PBRT系列17 - 专业知识理论与代码实战：物理材质](/pdfs/PBRT/PBRT系列17-专业知识理论与代码实战-物理材质.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列18 - 专业知识理论与代码实战：切线空间与凹凸贴图、透明贴图](/pdfs/PBRT/PBRT系列18-专业知识理论与代码实战-切线空间与凹凸贴图、透明贴图.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列19 - 专业知识理论与代码实战：运动模糊与实例化](/pdfs/PBRT/PBRT系列19-专业知识理论与代码实战-运动模糊与实例化.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列20 - 专业知识理论与代码实战：渲染概率与采样](/pdfs/PBRT/PBRT系列20-专业知识理论与代码实战-渲染概率与采样.pdf)  
  
  
PBRT系列21-专业知识理论与代码实战-次表面散射  
由于BSSRDF的实现较为复杂，且需要更多的理论技术描述，所以本人不打算直接在PBRT系列书中进行讲解，而是会单独开一个新的专题系列，描述次表面散射的各种技术。  
  
  
PBRT系列22-专业知识理论与代码实战-准蒙特卡洛与低差异序列  
由于本部分内容与渲染方法关系不大，所以暂时不规划写作。  
  
  
::ri:file-pdf-2-line:: [PBRT系列23 - 专业知识理论与代码实战：图像重建与滤波](/pdfs/PBRT/PBRT系列23-专业知识理论与代码实战-图像重建与滤波.pdf)  
:::

::: card title="PBRT高级积分器系列" icon=" "
根据PBRT实现的高级积分器的内容来进行详细地讲解和描述，将里面涉及到的方方面面都讲解清楚。

::ri:file-pdf-2-line:: [PBRT系列24 - 高级积分器：双向路径追踪](/pdfs/PBRT/PBRT系列24-高级积分器-双向路径追踪.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列25 - 高级积分器：随机渐进式光子映射](/pdfs/PBRT/PBRT系列25-高级积分器-随机渐进式光子映射.pdf)  
  
  
::ri:file-pdf-2-line:: [PBRT系列26 - 高级积分器：Metropolis光传输](/pdfs/PBRT/PBRT系列26-高级积分器-Metropolis光传输.pdf)  
  
  
PBRT系列27-高级积分器-球谐光照积分器  
由于球谐光照并不属于高质量离线渲染算法，所以我们并不在本系列进行讲解（PBRT-V2中有球谐光照积分器，有兴趣可以去学习一下）。

:::

::: card title="PBRT小专题" icon=" "
本系列内容是一些比较具体的小专题，区别于“PBRT专业理论”系列，用于介绍一些体量较少的内容。

::ri:file-pdf-2-line:: [体渲染的基本原理描述](/pdfs/PBRT/PBRT小专题-体渲染的基本原理描述.pdf)

::ri:file-pdf-2-line:: [无限面光源](/pdfs/PBRT/PBRT小专题-无限面光源.pdf)

::ri:file-pdf-2-line:: [光子映射与能量表示](/pdfs/PBRT/PBRT小专题-光子映射与能量表示.pdf)

:::