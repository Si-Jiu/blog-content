---
title: VSCode gdb调试时报错
published: 2025-04-20
description: "&\"warning: GDB: Failed to set controlling terminal: Operation not permitted\n\""
image: ""
tags: [C++, VSCode]
category: "编程"
draft: false
lang: "zh_CN"
---

## 省流

在`.vscode/tasks.json`中`args`里的`"-static",`去掉就解决了

## 正文

### 环境

环境为 Windows 11 + Arch Linux WSL + VSCode + clangd & 微软C/C++插件（关闭了IntelliSense）

### 问题怎么来的怎么解决的

之前为了模仿CCF测评机的编译选项，就把`tasks.json`改了改。  
然后问题就开始出现了：每次调试时都会有`&"warning: GDB: Failed to set controlling terminal: Operation not permitted\n"`的报错，并且无法使用断点调试  

我新创建了一个文件夹，重新生成了一边配置，写个Hello World发现果然没事。然后一个一个把`launch.json`和`tasks.json`里的配置删了试试，最后就发现去掉`tasks.json`中`args`里的`"-static",`问题马上就解决了，断点正常工作，就是调试的时候一开始还会闪一下`&"warning: GDB: Failed to set controlling terminal: Operation not permitted\n"`，不影响使用就没管他了
