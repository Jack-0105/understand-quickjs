# QuickJS 的使用

## 安装

项目中提供了一个 Makefile 文件来在 Linux 或 MacOS/X 上编译引擎。通过使用 MingGW 工具在 Linux 主机上进行交叉编译，可以获得 Windows 的初步支持。

如果要选择特定的编译选项，请编辑 `Makefile` 的顶部部分，然后运行 `make` 命令。

如果希望将二进制文件和依赖文件安装到 /usr/local，则可以以 root 用户身份输入 `make install` 命令（使用 QuickJS 不需要这样做）。

## 快速开始

### qjs

qjs 是命令行解释器（REPL， 即Read-Eval-Print Loop）。你可以将 JavaScript
文件或 JavaScript 表达式作为参数传入来执行它们：

```js
./qjs examples/hello.js
```

### qjsc

qjsc 是命令行编译器：

```js
./qjsc -o hello examples/hello.js
./hello
```

执行上面的命令会生成没有外部依赖的名为 `hello` 的可执行文件。

## 命令行选项

### qjs 解释器

用法：qjs [options] [file [args]]

Options 如下：

-h
--help
    列举选项。

-e EXPR
--eval EXPR
    执行 EXPR。

-i
---interactive
    进入交互模式（当命令行提供的是文件时，交互模式不是默认设置的）。

-m
--module
    作为 ES6 模块加载（默认自动检测）。如果文件名为 `.mjs` 或者如果源码中第一个关键字是 `import`，则会自动检测为模块。

--script
    作为 ES6 脚本加载（默认自动检测）。

--bignum
    启用 bignum 扩展：BigDecimal对象，BigFloat对象和 "use math" 指令。

-I file
--include file
    包括附加文件。

高级选项包括：

--std
    是 std 和 os 模块可以用于已经加载的脚本，即使它不是模块。

-d
--dump
    转储内存使用情况统计信息。

-q
--quit
    只需实例化解释器并退出。

### qjsc 编译器

用法：qjsc [options] [files]

Options 如下：

-c
    仅在 C 文件中输出字节码。默认为输出可执行文件。

-e
    在 C 文件中输出 `main（）` 和字节码。默认为输出可执行文件。

-o output
    设置输出文件名（默认为 `out.c` 或 `a.out`）。

-N cname
    设置生成数据的 C 名称。

-m
    编译为 JavasSript 模块（默认自动检测）。

-D module_name
    编译动态加载的模块及其依赖项。当代码中使用了 `import` 关键字或者 `os.Worker` 构造函数时，此选项是必需的，因为编译器无法静态地找到动态加载的模块的名称。

-M module_name[,cname]
    为外部 C 模块添加初始化代码。请参阅 `c_module` 示例。

-x
    字节交换输出（仅用于交叉编译）。

-flto
    使用链接时间优化。编译过程较慢，但可执行文件更小更快。当使用 `-fno-x` 选项时，将自动设置此选项。

-fno-[eval|string-normalize|regexp|json|proxy|map|typedarray|promise|bigint]
    禁用选定的语言功能以便生成较小的可执行文件。

-fbignum
    启用 bignum 扩展：BigDecimal对象，BigFloat对象和 "use math" 指令。

## qjscalc 应用

`qjscalc` 应用是 qjs 命令行解释器的超集，实现了具有任意大的整数和浮点数，分数，复数，多项式和矩阵的 JavaScript 计算器。源代码在qjscalc.js中。有关更多文档和Web版本的信息，请访问 http://numcalc.com。

## 内置测试

执行 `make test` 以运行 QuickJS 项目中包含的一些内置测试。

## Test262 (ECMAScript Test Suite)

QuickJS 项目中包含了 test262 的运行程序。test262 tests 可以通过在 QuickJS 项目中执行下面的命令安装：

```js
git clone https://github.com/tc39/test262.git test262
cd test262
patch -p1 < ../tests/test262.patch
cd ..
```

该 patch 修补程序添加了实现特定的工具功能，并优化了效率低下的 RegExp 字符类和 Unicode 属性转义测试（测试本身未修改，仅优化了较慢的字符串初始化功能）。

该测试套件可以通过 `make test2` 命令运行。

配置文件 test262.conf（对于 ES5.1 配置文件为 test262o.conf）包含用于运行各种测试的选项。可以根据功能或文件名排除测试。

文件 test262_errors.txt 包含当前错误列表。当出现新错误或纠正或修改现有错误时，运行程序将显示一条消息。使用 `-u` 选项更新当前错误列表（或 `make test2-update`）。

文件 test262_report.txt 包含所有测试的日志。对特定错误进行更清晰的分析很有用。万一发生崩溃，最后一行对应于失败的测试。

使用语法 `./run-test262 -c test262.conf -f filename.js` 运行单个测试。使用语法 `./run-test262 -c test262.conf N` 以测试编号 N 开始测试。

有关更多信息，请运行 `./run-test262` 以查看 test262 运行程序的命令行选项。

`run-test262` 接受从 `test262-harness5` 到 `eshost` 调用的 -N 选项。除非想在相同条件下将 QuickJS 与其他引擎进行比较，否则不建议以此方式运行测试，因为它要慢得多（通常为半小时而不是大约 100 秒）。
