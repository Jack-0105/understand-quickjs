module.exports = {
  title: "深入 JavaScript 引擎",
  description: "通过源码分析 javascript 引擎 quickjs 的原理",
  dest: "dist",
  base: "/understand-quickjs/",
  serviceWorker: false,
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: `/favicon.ico` },
    ],
  ],
  themeConfig: {
    repo: "mcuking/understand-quickjs",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "为该章节纠错",
    lastUpdated: "上次更新",
    sidebar: [
      ["/", "前言"],
      {
        title: "第 1 章 初识 QuickJS",
        collapsable: true,
        children: [
          ["/preparation/intro", "1.1 QuickJS 简介"],
          ["/preparation/structure", "1.2 QuickJS 源码目录结构"],
          ["/preparation/usage", "1.3 QuickJS 的使用"],
        ],
      },
    ],
  },
};
