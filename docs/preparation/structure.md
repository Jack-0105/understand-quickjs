# QuickJS 源码目录结构

下面是 QuickJS 项目的目录结构（只列举了主要文件）：

```js
quickjs.c quickjs.h    主程序位置（编译器和解释器功能实现都在这里）
quickjs-atom.h         预定义的字符串
quickjs-opcode.h       字节码中的操作符定义

qjsc.c                 编译器程序 qjsc 的入口

qjs.c                  REPL 交互解释器 qjs 的入口
repl.js                REPL 的实现
qjscalc.js             数学计算器应用，支持任意长度的整数、浮点数、分数、复数、多项式、矩阵计算

cutils.c cutils.h      辅助函数
list.h                 klist 实现
libbf.c libbf.h        BigFloat 实现
libregexp.c libregexp.h libregexp-opcode.h      正则表达式实现
libunicode.c libunicode.h libunicode-table.h    Unicode 编码的支持


quickjs-libc.c quickjs-libc.h  暴露给 C 程序使用的 API

examples/     示例 JS 程序
tests/        测试程序
doc/          文档
Changelog/    程序修改记录

readme.txt    部分内容介绍
Makefile      QuickJS 项目构建文件
TODO          未来计划做的事情
VERSION       QuickJS 当前版本发布日期
```
