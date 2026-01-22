# NewBlog - Gatsby 技術部落格專案

## 專案概述

這是 Mark Ku 的個人技術部落格，基於 Gatsby 4 和 FlexiBlog 主題建構。使用 MDX 撰寫文章，部署於 Vercel，並整合 Algolia 搜尋和 Google Analytics。

## 技術棧

- **框架**: Gatsby 4.x
- **UI**: React 18
- **主題**: @elegantstack/gatsby-theme-flexiblog-personal
- **文章格式**: MDX (Markdown + JSX)
- **搜尋**: Algolia
- **CMS**: Netlify CMS
- **部署**: Vercel
- **分析**: Google Analytics (gtag)

## 專案結構

```
NewBlog/
├── site/                          # 主要網站目錄
│   ├── content/
│   │   ├── posts/                 # 部落格文章 (MDX)
│   │   ├── authors/               # 作者資料
│   │   ├── categories/            # 分類設定
│   │   └── assets/                # 靜態資源
│   ├── gatsby-config.js           # Gatsby 配置
│   └── package.json
├── packages/                      # Monorepo 套件
│   ├── blog/                      # 部落格相關套件
│   ├── flow-ui/                   # UI 元件
│   ├── themes/                    # FlexiBlog 主題
│   └── plugins/                   # Gatsby 插件
└── starters/                      # 各種 starter 範本
```

## 文章撰寫規範

### 文章檔案格式

文章放置於 `site/content/posts/` 目錄，支援兩種格式：

1. **單檔案**: `YYYY-MM-DD-slug.mdx`
2. **資料夾** (含圖片): `YYYY-MM-DD-slug/index.mdx`

### Frontmatter 必填欄位

```yaml
---
featured: true                          # 是否為精選文章
title: 文章標題
date: 2025-01-22 01:01:35 +0800         # 發布日期
thumbnail: image.jpg                     # 縮圖 (同目錄或 URL)
category: Frontend                       # 分類 (單一)
tags: ['tag1', 'tag2']                  # 標籤 (陣列)
description: 文章描述                    # SEO 描述
author: Mark Ku                          # 作者
slug: article-slug                       # URL slug
---
```

### 可用分類 (Categories)

- Frontend
- Backend
- NETCORE
- PowerShell
- DevOps
- AI
- Life

### 文章風格指南

- 使用繁體中文撰寫
- 開頭以「前言」或「問題」起頭
- 使用清晰的章節標題 (##, ###)
- 程式碼使用 code fence 並標註語言
- 適時使用項目列表和 emoji
- 結尾可加「感想」或「總結」

### 圖片使用

```markdown
<!-- 同目錄圖片 -->
![描述](image.png)

<!-- 外部圖片 (Imgur) -->
![描述](https://i.imgur.com/xxxxx.png)
```

## 常用指令

```powershell
# 進入 site 目錄
cd site

# 開發模式
npm run develop
# 或
gatsby develop

# 建構生產版本
npm run build

# 清除快取
npm run clean
# 或
gatsby clean

# 本地預覽生產版本
npm run serve
```

## 環境變數

需在 `site/.env` 設定：

```env
SITE_URL=https://blog.markkulab.net
GATSBY_ALGOLIA_APP_ID=your_app_id
ALGOLIA_ADMIN_KEY=your_admin_key
```

## 部署流程

1. 推送到 `main` 分支
2. Vercel 自動觸發建構
3. 建構成功後自動部署

## 注意事項

- Gatsby 建構時會處理所有 MDX 文章，新增文章需重新建構
- 圖片建議使用 WebP 格式並壓縮
- 大量圖片的文章建議使用資料夾格式
- Algolia 索引在建構時自動更新
- 修改主題套件後需要 `gatsby clean` 清除快取
