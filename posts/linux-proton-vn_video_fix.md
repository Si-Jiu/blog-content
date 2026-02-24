---
title: 修复 Proton 运行视觉小说时无法播放视频
published: 2026-01-11
description: "一播放就报错/闪退/被跳过"
tags: [Visual Novel, Linux, Proton]
category: "Game"
draft: false
lang: "zh_CN"
---

## 前言

推 Gal 时发现 OP 和 ED 不是无法播放就是报错，研究了会。  
~~I use arch btw~~ 作者使用系统为 `Arch Linux` ，所以非 `Arch 系 Linux`（如 `Arch Linux`, `SteamOS`, `Manjaro`, `CachyOS`）的用户在安装软件包时请自行寻找安装办法（自行编译或者寻找预编译的包）  
本教程主要处理 Steam 上的游戏，其他游戏管理器的自行判断如何选择。

文章最后有不同 VN [已经验证的解决方案](#已经验证的解决方法)

## 免责声明

:::caution
请自行判断每个步骤的正确性，如因自己的操作导致系统损坏与本教程无关
:::

## 解决方法

### 前置步骤

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
(KrKr 引擎的游戏) 如不行可以将鼠标划到最上面，会出现顶栏，在帮助->显示高级设置，再顶栏->高级设置->视频显示模式->自动。  

## 已经验证的解决方法

### 柚子社作品

Steam 上的 魔女的夜宴（中文版），千恋*万花，Riddle Joker，星光咖啡厅与死神之碟 已经过测试
Hikari Field 上的 天使☆嚣嚣RE-BOOT! 暂时未经过测试，有空就测  

使用 GE-Proton 9-25（9版本的应该都行）  
顶栏->帮助->启用高级设置，顶栏->高级设置->视频设置->自动  
现在看 OP 是正常的，但是 ED 是无法播放的  
Proton Tricks 中安装 `wmp9`（`wmp11`会导致播放时报错） 和 `directshow` 也许可以修好 ED 无法播放的问题（**是也许**）  
如果遇到画面出现闪烁，鼠标指针拖不动，请到设置里开启全屏模式  

~~柚子社的是真麻烦，试了几个小时还是没试出来能用的，网上将的 `wmp9 + directshow` 在我这还是照样无法播放😭~~

### 星空列车与白的旅行

使用 GE-Proton 10-28

### ATRI -My Dear Moments-

使用 GE-Proton 10-28

## 修复不了？

如果文章给出的方法试过了还是不行可以看看 [Proton DB](https://www.protondb.com/) 中游戏的评论提供的方法，或者自行搜索，当然还可以自己尝试组合排列 Proton 版本和需要安装的组件  
~~还是不行那就可以放弃了，装 Windows + Linux 双系统吧或者跳过视频自己去网上找着看吧~~
