---
title: 修复 Proton 运行游戏时鼠标异常卡顿
published: 2026-01-12
description: '解决你明明 FPS 不低但是画面移动异常卡顿的问题'
tags: [Garrry's Mod, Linux, Proton]
category: 'Game'
draft: false 
lang: 'zh_CN'
---

## 前言

作者系统环境：Arch Linux + end_4 的 hyprland dotfile (quickshell) + GE-Proton10-28  
在游玩 GMod 时看见帧数明明维持在 70 FPS，但是画面移动还是异常卡顿，后面发现鼠标在 GMod 窗口上会变得卡顿，在骚扰 Gemini 之后得出了这套十分有效的解决方案  

## 解决鼠标移动卡顿

### 安装 Gamescope

Arch 系（如 Arch Linux, SteamOS, CachyOS, Manjaro）：

```bash
sudo pacman -S gamescope
```

Debian 系（如 Ubuntu, Debian）：

```bash
sudo apt install gamescope
```

### 使用 Gamescope

在 Steam 中右键游戏->属性->启动选项中的文字框填上：

```plaintext
gamescope -W 宽 -H 高 -r 刷新率 -- %command%
```

按照你自己显示器的参数填写，作者的屏幕为 1920x1080 60Hz，所以我的启动选项会是：

```plaintext
gamescope -W 1920 -H 1080 -r 60 -- %command%
```

## 解决鼠标不显示

按照上面的步骤来你应该已经修复了，但是可能还会遇到进入游戏之后鼠标指针不显示的情况，那么你就要这么修复：

### 方法1（推荐）

将启动选项加多一个参数（--force-grab-cursor）：

```plaintext
gamescope -W 1920 -H 1080 -r 60 --force-grab-cursor -- %command%
```

### 方法2

在游戏设置中，找到画面设置，将显示模式修改为无边框全屏（Borderless开头的）

### 方法3（起源引擎游戏专供）

点击 `~` 键，打开控制台，输入

```source
cl_software_cursor 1
```

如没有控制台请先在设置里找出启用控制台的选项，然后启用

## 已经验证的解决方法

### Garry's Mod

[解决鼠标移动卡顿](#解决鼠标移动卡顿) + [方法1](#方法1推荐) / [方法3](#方法3起源引擎游戏专供)
