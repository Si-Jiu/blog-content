---
title: 修复Steam在Wayland下的输入法问题
published: 2026-02-18
description: '什么时候Linux能有完美的输入法方案呢'
image: ''
tags: [Steam, Linux]
category: "Game"
draft: false 
lang: 'zh_CN'
---

## 环境

Arch Linux + Hyprland + fcitx5  
其他 Distro 不保证可行性（但应该能用的~）  
使用 Extra 库中的 Steam  

## 修改 Desktop 文件

Linux 中的 Desktop 文件中给出了应用的名称，描述，启动方式等信息，给一个 gtk 应用启用输入法支持可以通过添加环境变量 `GTK_IM_MODULE=xim`  
所以我们只需要修改 Steam 的 Desktop 文件  

```bash
sudo vim /usr/share/applications/steam.desktop
```

将光标移动到图片中的位置，按下 `I` 进入插入文本模式，粘贴文本 `env GTK_IM_MODULE=xim`
![修改](image.png)

然后按下 `ESC`，再输入 `:wq` 保存

此时应该就能在 Steam 中使用中文输入法了
