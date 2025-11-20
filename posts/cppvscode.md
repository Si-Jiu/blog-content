---
title: VSCode + MSYS2 + gcc + clangd的C++环境配置
published: 2025-08-21
description: '虽然但是为什么要gcc配clangd，但是打OI用起来还行'
image: ''
tags: [C++, VSCode]
category: '编程'
draft: false 
lang: 'zh_CN'
---

## 前言（废话）

clangd相对微软官方C++插件我个人认为IntelliSense会快很多，官方插件感觉写完过了好几秒才有高亮  
我原本是vscode+arch linux wsl+clangd的组合，但是重装系统后懒得整wsl，于是转用msys2  

## 软件下载安装+配置

### MSYS2

#### 安装

1. 打开[MSYS2官网](https://www.msys2.org/)
![1](https://i.imgur.com/gfMerBo.png)如无法打开或下载缓慢请到：[清华源](#msys2清华源下载)
1. 下载Installation下的`msys2_x86_64-********.exe`
2. 打开安装包，全程下一步
3. 安装成功

#### 配置

1. 打开开始菜单，找到`MSYS2 UCRT64`
![1](https://i.imgur.com/i5CYF2n.png)
1. 在命令行输入

```bash
pacman -S mingw-w64-ucrt-x86_64-clang mingw-w64-ucrt-x86_64-clang-tools-extra mingw-w64-ucrt-x86_64-gcc mingw-w64-ucrt-x86_64-gdb
```

输入y继续安装
![1](https://i.imgur.com/i2USLAR.png)

如下载过程过慢请参阅[MSYS2换源](#msys2换源)

3. 测试安装是否成功

```bash
gcc --version
```

```bash
gdb --version
```

```bash
clangd --version
```

![1](https://i.imgur.com/zVpJYTU.png)
应该和图中类似

4. 按`Win`+`E`键打开文件管理器，右键左侧栏里的此电脑，选择属性，在打开的设置中点击`查看高级系统设置`，点击`环境变量`

:::warning
接下来请严格按照步骤，否则自行学习如何重装系统
:::

5. 在下方系统变量中双击`Path`，选择`新建`，在框内输入`<你的MSYS2安装地址>\ucrt64\bin`，确定
![1](https://i.imgur.com/iFcrZQc.png)
6. 配置完毕

### Visual Studio Code

#### 安装

1. 打开[VSCode官网](https://code.visualstudio.com/Download)
![1](https://i.imgur.com/UH9iOfF.png)
1. 选择对应处理器架构，建议下载`System Download`旁的
2. 下载后打开安装包，全程下一步
3. 安装成功

#### 配置

##### 安装插件

1. 打开VSCode,在左侧栏中找到插件
2. 下载这些插件：`C/C++`,`clangd`
![1](https://i.imgur.com/pl4jYFb.png)
3. 打开设置，找到插件->clangd，修改设置
![1](https://i.imgur.com/anmQ1iR.png)

```plaintext
--clang-tidy
--all-scopes-completion
--completion-style=detailed
--header-insertion=never
--pch-storage=memory
--background-index
```

![1](https://i.imgur.com/Tvz8a4e.png)

##### 配置目录

1. 新建一个文件夹，名字最好不带符号空格和除英文外的语言
2. 创建子文件夹：`.vscode`,`build`, `src`.  
`.vscode`文件夹存放vscode的配置文件  
`build`文件夹存放编译出来的文件  
`src`文件夹存放源代码  
创建文件：`.clangd`  
修改`.clangd`文件为：  

```yaml
CompileFlags:
  Compiler: g++
  Add: [-std=c++14]
```

进入`.vscode`文件夹，创建文件：`launch.json`和`tasks.json`  
修改`launch.json`文件为：

```json
{
  "configurations": [
    {
      "name": "C/C++: g++ 构建和调试活动文件",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/build/${fileBasenameNoExtension}",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${fileDirname}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "setupCommands": [
        {
          "description": "为 gdb 启用整齐打印",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        },
        {
          "description": "将反汇编风格设置为 Intel",
          "text": "-gdb-set disassembly-flavor intel",
          "ignoreFailures": true
        }
      ],
      "preLaunchTask": "C/C++: g++ 生成活动文件",
      "miDebuggerPath": "gdb",
      "internalConsoleOptions": "neverOpen"
    }
  ],
  "version": "2.0.0"
}
```

修改`tasks.json`文件为：

```json
{
  "tasks": [
    {
      "type": "cppbuild",
      "label": "C/C++: g++ 生成活动文件",
      "command": "g++",
      "args": [
        "-fdiagnostics-color=always",
        "-std=c++14",
        "-O2",
        "-g",
        "${file}",
        "-o",
        "${workspaceFolder}/build/${fileBasenameNoExtension}"
      ],
      "options": {
        "cwd": "${fileDirname}"
      },
      "problemMatcher": ["$gcc"],
      "group": "build",
      "detail": "调试器生成的任务。"
    }
  ],
  "version": "2.0.0"
}
```

现在文件夹里应该是这样的：
![1](https://i.imgur.com/DvN5pE6.png)

3. 现在在`src`文件夹里创建`.cpp`文件，随便写个Hello, World

```cpp
#include <iostream>
int main() {
    std::cout << "Hello, World!";
    return 0;
}
```

4. 你的右下角应该会出现这个通知，选择`Disable IntelliSense`，然后`Reload`
![1](https://i.imgur.com/2OpSUwu.png)

5. 现在打开cpp文件按F5就可以编译运行文件了
6. 配置成功

## 大陆源

### MSYS2清华源下载

1. 打开[清华源MSYS2](https://mirrors.tuna.tsinghua.edu.cn/msys2/distrib/x86_64/)
2. 翻到最底，找到日期最新，后缀为`.exe`的安装包
![1](https://i.imgur.com/SAEUakQ.png)
1. 打开安装包，全程下一步
2. 安装成功

### MSYS2换源

1. 打开任一 MSYS2环境，在命令行输入：

```bash
sed -i "s#https\?://mirror.msys2.org/#https://mirrors.tuna.tsinghua.edu.cn/msys2/#g" /etc/pacman.d/mirrorlist
```

和

```bash
pacman -Syu
```

换源成功

## 如果你觉得有帮助可以在下面留言以及到我的Bilibili点个关注捏谢谢喵

求你了喵
