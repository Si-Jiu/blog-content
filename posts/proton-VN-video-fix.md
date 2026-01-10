---
title: 修复Proton运行视觉小说时无法播放视频
published: 2026-01-04
description: "一播放就报错/闪退/被跳过"
tags: [Visual Novel, Linux, Proton]
category: "Game"
draft: false
lang: "zh_CN"
---

## 前言

推 Gal 时发现 OP 和 ED 不是无法播放就是报错，研究了会。  
~~I use arch btw~~ 作者使用系统为 `Arch Linux` ，所以非 `Arch 系 Linux`（如 `Arch Linux`, `SteamOS`, `Manjaro`）的用户在安装软件包时请自行处理。  
本教程主要处理 Steam 上的游戏，其他游戏管理器的自行判断如何选择。

## 解决方法

### 前置步骤

#### 免责声明

:::caution
本教程不保证正确性，请自行判断每个步骤
:::

#### 安装 AUR Helper（仅 Arch 系 Linux）

##### 使用 ArchLinuxCN

编辑 pacman 配置文件

```bash
sudo vim /etc/pacman.conf
```

按下 `Shift` + `G` 键，在文件末尾添加内容：

```plaintext
[archlinuxcn]
Server = https://mirrors.aliyun.com/archlinuxcn/$arch
```

按下 `:` 键，输入 `wq`  

随后再安装 `yay` 或者 `paru`（根据个人喜好）

```bash
sudo pacman -Syyu yay 
```

##### 手动安装

懒得写了~

### 方法1（GE-Proton）

适用于大部分视觉小说。  
如果在中国大陆遇到下载缓慢情况请科学上网。  

#### 安装 ProtonUP

安装 `protonup-qt-bin`<sup>AUR</sup> 或者 `protonup-qt`<sup>AUR</sup>

```bash
yay -S protonup-qt-bin
```

然后打开`protonup-qt`

```bash
protonup-qt
```

#### 安装 GE-Proton

等待窗口打开后， `Install For` 选择你的游戏管理应用，例如你在 Steam 上的游戏就选 `Steam` ，如是本地游戏可以通过 `Lutris` 等游戏管理器，请自行寻找教程安装。  
点击左下角 `Add version`  
打开弹窗，在 `Compatibility tool` 处选择 `GE-Proton`， `Version` 处选择最新版本（如最新版本不能解决请尝试9-X版本），点击左下角 `Install`  
等待进度条完成之后，点击右下角 `Close`。如 Steam 在安装时打开，请重启 Steam。

#### 使用GE-Proton打开游戏

##### Steam

打开Steam，右键游戏，选择 `属性`。  
在弹窗中点击 `兼容性` ，勾选`强制使用特定 Steam Play 兼容性工具`，下面选择框选择 `GE-ProntoXX-XX`（你刚刚在 ProtonUP 中选择的版本）  

##### 其他

自行寻找，一般在属性中可以找到。

此时再打开游戏，可能会有窗口弹出，显示正在修复，等待进度条走完会自动打开。

### 方法2（手动安装）

适用于方法1无法修复的情况

#### 安装 protontricks

安装 `protontricks`<sup>AUR</sup> 和 `winetricks`<sup>Extra</sup>  

```bash
yay -S winetricks protontricks
```

#### 使用 Proton Experimental

打开Steam，右键游戏，选择 `属性`。  
在弹窗中点击 `兼容性` ，勾选`强制使用特定 Steam Play 兼容性工具`，下面选择框选择 `Proton Experimental`  

#### 清空 Prefix

随便右键一个下载了的游戏，属性->浏览本地文件  
向上2次返回目录，返回到 `Steam/steamapps/` 结尾的目录  
进入 `compatdata` 目录， 删除名字为游戏ID（可在[安装组件](#安装组件)部分中打开 Proton Tricks 时看见）的目录。  
使用 `Proton Experimental` 进入一次游戏后退出。

#### 安装组件

##### 打开 Proton Tricks

打开 ProtonTricks，推荐使用终端打开来查看运行情况

```bash
protontricks --gui
```

弹出窗口后选择要修复的游戏，选择之后等待弹出新的窗口。

##### 用 Wine Tricks 安装组件

如有警告直接按 OK 忽略就行。  

第一个窗口选择 `Select the default wineprefix`， 点击 OK

第二个窗口选择 `Install a Windows DLL or component`  

第三个窗口勾选 `wmp9` 和 `directshow`， 点击 OK。
随后会进行安装。如有弹窗弹出可直接点击 OK。如有安装程序弹出一路Next即可。

安装完后回到第二个窗口，一路 Cancel 退出。

## 修复完后

现在打开游戏，可以通过类似鉴赏模式等功能查看 OP 和 ED 能不能正常播放。  
(KrKr引擎的游戏) 如不行可以将鼠标划到最上面，会出现顶栏，在帮助一栏点击显示高级设置。再到顶栏中点击高级设置，在视频显示模式中选择自动。  
如果方法1和2都试过了还是不行可以看看 [Proton DB](https://www.protondb.com/) 中游戏的评论提供的方法。  
~~还是不行那就可以放弃了，装 Windows + Linux 双系统吧。~~
