# QuickJS 简介

## QuickJS 定义

QuickJS 是一个轻量的可嵌入的 JavaScript 引擎，支持包括模块、异步生成器、proxies、BigInt 等功能在内的 ES2020 标准。

QuickJS 也选择性地支持数学扩展，例如大十进制浮点数（BigDecimal）、大二进制浮点数（BigFloat）和运算符重载。

## QuickJS 主要特点

QuickJS 主要有以下几个特点：

- 轻量且易于嵌入：只需几个 C 文件，没有外部依赖，X86 架构下一个简单的 `hello world` 程序只需要 210 KiB；

- 快速地解释执行，只需极低的启动时间：在一台单核的台式 PC 机上运行 [ECMAScript Test Suite](https://github.com/tc39/test262) 的 69000 份测试用例只需要 95 秒。一个运行时实例的完整生命周期可以在不到 300 微秒的时间内完成；

- 几乎实现了 ES2020 全部的特性，包括模块、异步生成器和附件 B 的全部特性（传统 web 兼容性）；

- 当选择 ES2020 特性时，几乎通过了 100% 的 ECMAScript 测试套件。可以在 [Test262](https://test262.report) 报告中查看相关摘要；

- 可以将 JavaScript 源码编译成没有外部依赖的可执行文件；

- 采用引用计数方式进行垃圾回收（以减少内存占用并具有确定性行为）和循环删除；

- 数学扩展：BigDecimal、BigFloat、运算符重载、bigint 模式、math 模式；
  
- 使用 JavaScript 实现了带有上下文着色的命令行解释器；

- 采用 C 包装库构建的内置标准库。

总结来说主要特点有：轻量、启动速度快、垃圾回收器、支持大数计算、有好的 REPL 交互式解释器等。

## QuickJS 主要功能

QuickJS 主要提供以下几个功能：

- qjsc 编译器 -- 编译 JavaScript 代码生成对应的字节码，链接 QuickJS 执行库就可以生成可执行文件
  
- qjs 解释器 -- 直接编译 JavaScript 代码并执行生成的字节码，支持 REPL 交互

- quickjs-lib.h 库 -- 用于在 C 程序中方便地调用 QuickJS 的编译器或解释器

## 相关链接

QuickJS 官网：[https://bellard.org/quickjs](https://bellard.org/quickjs)

QuickJS 官方源码仓库：[https://github.com/bellard/quickjs](https://github.com/bellard/quickjs)

QuickJS 作者网站：[https://bellard.org](https://bellard.org)

ECMAScript Test Suite（即 Test262）：[https://github.com/tc39/test262](https://github.com/tc39/test262)

Test262 报告：[https://test262.report](https://test262.report)

## 知识点补充

- Fabrice Bellard

  QuickJS 的主要作者，于 1972 年出生在在法国的格勒诺布尔，毕业于巴黎综合理工学院，主要成果有：创造了 QEMU、FFmpeg、Tiny C Compiler、QuickJS；2009 年打破了圆周率计算的世界纪录，仅用一台普通PC机，耗时 116 天，算出了圆周率小数点后2.7万亿位，比 2009 年 8 月 17 日由超级计算机算出的世界纪录多了 1200 亿位；2011 年使用纯 JavaScript 编写了一个 PC 虚拟机 Jslinux。更多的内容可以关注作者的网站。

- ECMAScript Test Suite

  也就是 Test262，是一个测试套件，目的在于测试 ECMA-262 规范（即 ECMAScript 语言规范）、ECMA-402 规范（即 ECMAScript 国际化 API 规范）、ECMA-404（JSON 数据交换格式）。该测试套件包含成千上万的单个测试，每个测试都用于测试这几个规范的一些具体实现。

- REPL
  
  全称 Read-Eval-Print-Loop，即交互式解释器，是一个简单的、交互式的编程环境。主要作用是读取输入的内容并对其求值，再返回结果，并重复此过程，例如输入 JavaScript 代码。
