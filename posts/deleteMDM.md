---
title: 刪除MDM管理
published: 2025-04-09
description: "已經裝了MDM但是忍受不了無Game可打？試試這個教程"
image: "https://i.imgur.com/L4CuGP0.jpeg"
tags: [MDM]
category: "IT"
draft: false
lang: "zh_TW"
---

## 免責申明

:::caution
本教程只適合有IT基礎的人群，并且**不保證**本教程完全正確  
**刪除有風險**，如果刪除過程中出現問題導致iPad**出現故障**，與**本教程無關**  
:::

## 準備材料

請先確保你有：

1. PC（Mac不適配這個教程|Win10及以下系統版本沒有測試過）
2. 數據線（充電線，要能傳數據的，建議原裝的）
3. iPad（按理來説支持iPhone但是不推薦嘗試）
4. 充足的時間和耐心

:::note
請保數據線上的接口能連接到PC上, 例如你的數據線是Type-C，那麽你的電腦上要有Type-C的接口才行
:::

## 刪除MDM

### 下載軟件

#### 下載 iTunes

下載[這個程式](https://www.apple.com/itunes/download/win64)
然後按照步驟來：

1. 打開安裝程式，點擊下一步  
![1](https://i.imgur.com/BOVXoP8.png)
2. 建議取消 _將iTunes用作音頻文件的默認播放器_ 其他默認，點擊安裝  
![1](https://i.imgur.com/n5Y45zj.png)
3. 等待安裝，安裝完成後點擊結束  
![1](https://i.imgur.com/6wMasA2.png)

#### 下載 iBackupBot

下載[這個程式](https://www.icopybot.com/ibackupbot_setup.exe)

然後按照步驟來：

1. 打開安裝程式，選擇語言，然後點擊OK  
![1](https://i.imgur.com/3zeyNSp.png)
2. 點擊下一步  
![1](https://i.imgur.com/mLIOp3q.png)
3. 點擊我接受  
![1](https://i.imgur.com/gOqWGnH.png)
4. 建議默認，點擊下一步  
![1](https://i.imgur.com/1WRr6EE.png)
5. 點擊安裝  
![1](https://i.imgur.com/LyamAg7.png)
6. 保持默認，點擊完成  
![1](https://i.imgur.com/o3uiUqm.png)

### 創建備份

1. 使用數據線將iPad和PC連接
2. 解鎖iPad，進入到主屏幕
3. 如果iPad上出現 _信任此電腦_ 或者 _允許讀取數據_ 之類的請選擇同意，輸入密碼
4. 打開iTunes
5. 點擊左上角的平板圖標
![1](https://i.imgur.com/2yXbjJQ.png)
6. 在右邊備份那裏設置為備份到此電腦，不要勾選加密
7. 點擊立即備份
![1](https://i.imgur.com/BBn6rgM.png)
8. 如果彈出視窗讓你選擇加不加密，請選擇不加密
![1](https://i.imgur.com/DKxvvsC.png)
9. 如果iPad上出現 _信任此電腦_ 或者 _允許讀取數據_ 之類的請選擇同意，輸入密碼
10. 等待備份完成

### 修改備份

1. 打開iBackupBot，等待加載
2. 加載完成后是這個界面
![1](https://i.imgur.com/GOaBAAA.png)
3. 打開備份文件文件夾（默認在`C:\Users\Administrator\AppData\Roaming\Apple Computer\MobileSync\Backup`）、把裏面的備份文件複製一份到不會被誤刪除的地方  

:::important
一定要複製一份！不然iPad刷成磚頭就救不回來了！
:::
![1](https://i.imgur.com/1Chz2wX.png)
4. 在iBackupBot裏點擊備份文件左邊的加號展開列表，點擊 `System Files`
![1](https://i.imgur.com/NMAA9Sl.png)
5. 然後翻看列表，找到 `SysSharedContainerDomain-systemgroup.com.apple.configurationprofiles`，點擊左邊的加號，再點擊 `Library`，右邊點擊 `ConfigurationProfiles`，點擊上面的 `Delete`

:::tip
滑鼠指針懸停在沒完全顯示名稱的文件上可以看到完整名稱
:::

![1](https://i.imgur.com/Xl6mdoy.png)

6. 修改完成

### 還原備份

1. 按照 創建備份 那個章節的1-5步
2. 點擊 _恢復備份_
![1](https://i.imgur.com/3qsrme6.png)
3. 等待iPad還原
4. 恢復完成後，按照iPad上的步驟來
5. 檢查iPad中 設定->一般->VPN與裝置管理 裏面沒有MDM
6. 恭喜你，你的iPad沒有MDM了

## 刪除后的工作

恭喜你能成功刪除MDM，刪除之後仍要設置一些東西（可選，如果你不怕被老師罵）

### 隱藏游戲以及學校禁止的應用

#### 方法A

##### 完全隱藏

這個方法可以讓應用在桌面以及App資料庫中看不到，只能在App資源庫中最下面的隱藏那一欄使用 密碼/人臉/指紋 解鎖

1. 找到你要隱藏的App
2. 長按圖標
![1](https://i.imgur.com/3Su35Px.png)
3. 點擊 _需要Touch ID / Face ID_
4. 選擇 _隱藏並需要Touch ID / Face ID_
![1](https://i.imgur.com/P8OZgno.png)

#### 不完全隱藏

這個方法隱藏的雖然桌面沒有但是打開App資源庫就會出現

1. 找到你要隱藏的App
2. 長按圖標
![1](https://i.imgur.com/3Su35Px.png)
3. 點擊 _移除App_
4. 點擊 _從主屏幕移除_
![1](https://i.imgur.com/WZyKEXJ.jpeg)

#### 方法B

利用專注模式來隱藏特定頁數的桌面

1. 把要隱藏的App放到單獨的頁面
![1](https://i.imgur.com/3LZGfPB.png)
2. 打開設定 -> 專注模式
3. 新建一個專注模式
![1](https://i.imgur.com/5oRiGD4.png)
4. 點擊`自定熒幕`中的編輯
![1](https://i.imgur.com/73IXHK0.png)
5. 選擇不要出現的頁面
![1](https://i.imgur.com/jpNO92v.png)
6. 設定時間表，在到學校時自動隱藏，離開時自動出現
![1](https://i.imgur.com/YiGyVgI.png)
