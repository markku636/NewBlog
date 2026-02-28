# Mark Ku 技術部落格 - Claude Code 指引

## 專案概覽

這是 Mark Ku 的個人技術部落格，使用 Gatsby + gatsby-theme-flexiblog 建置。
- 網站：`blog.markkulab.net`
- 作者：Mark Ku
- 語言：繁體中文為主，技術名詞使用英文
- 框架：Gatsby (React SSG)

## 專案結構

```
NewBlog/
├── site/
│   ├── content/
│   │   ├── posts/          # 所有文章
│   │   ├── categories/     # 分類定義 (JSON + SVG)
│   │   ├── authors/        # 作者資料 (mark-ku.json)
│   │   └── assets/         # 共用資源
│   └── gatsby-config.js
└── packages/themes/        # 自訂佈景主題
```

---

## 部落格文章撰寫規範

### 1. 檔案結構

新文章一律使用**目錄式結構**：

```
site/content/posts/YYYY-MM-DD-kebab-case-slug/
├── index.mdx
├── thumbnail.png (或 .jpg / .webp)
└── other-images.png
```

- 目錄命名：`YYYY-MM-DD-kebab-case-英文描述`
- 檔案名稱：`index.mdx`
- 圖片放在同目錄下，用裸檔名引用（如 `![alt](image.png)`）

### 2. Frontmatter 格式

```yaml
---
featured: true
title: 文章標題（繁體中文）
date: YYYY-MM-DD HH:MM:SS +0800
thumbnail: cover-image.png
category: CategoryName
tags: ['tag1', 'tag2', 'tag3']
description: 一句話描述文章內容
author: Mark Ku
slug: kebab-case-url-slug
---
```

**注意事項：**
- `featured` 固定為 `true`
- `date` 時區固定為 `+0800`（台灣時間）
- `thumbnail` 只寫檔名，不加路徑
- `category` 是單一字串（非陣列）
- `tags` 使用 inline array 格式 `['tag1', 'tag2']`
- `author` 固定為 `Mark Ku`
- `slug` 使用 kebab-case 英文

### 3. 可用分類 (Categories)

以下是已定義的分類（必須完全匹配）：

| 分類名稱 | 主題範圍 |
|----------|----------|
| AI | AI、LLM、Agent、MCP |
| Frontend | React、Vue、Next.js、CSS、JavaScript |
| Backend | C#、Node.js、API 設計 |
| DevOps | CI/CD、Docker、K8s、ArgoCD |
| Infra | 基礎設施、網路、伺服器 |
| Cloud | 雲端服務 (AWS/GCP/Azure) |
| Security | 資安、DDoS、WAF |
| ECommerce | 電商系統、支付 |
| SEO | 搜尋引擎優化 |
| Management | 管理、團隊、職涯 |
| Learning | 學習方法、英文學習 |
| NETCORE | .NET Core 相關 |
| PowerShell | PowerShell 腳本 |
| Payment | 金流、支付 |
| Google Analysis | GA4、GTM |
| Travel | 旅遊 |
| Triathlon | 三鐵、運動 |
| Photography | 攝影 |
| 技術分享 | 綜合技術分享（跨領域） |
| Life | 生活雜記 |

### 4. 文章結構模板

#### 技術文章標準結構：

```markdown
## 前言
（描述背景、痛點、為什麼寫這篇）

## 問題描述 / 挑戰
（具體說明遇到的問題）

## 解決方案 / 做法
### 步驟 1：...
### 步驟 2：...

## 執行結果 / 實際效果
（截圖、效果展示）

## 總結 / 心得
（回顧與反思）

## 參考資料
- [連結標題](URL)
```

#### 結構要點：
- `##` 作為最高層級標題（文章標題由 frontmatter 的 title 提供）
- `###` 用於子章節
- 善用 **Markdown 表格** 做比較
- 善用 **ASCII 方塊圖** 做架構或流程說明
- 善用 `> blockquote` 做提示、重點摘要
- 善用 `P.S.` 補充額外資訊
- 程式碼區塊標明語言（如 ```typescript, ```bash, ```sql）

### 5. 寫作風格

- **語言**：繁體中文為主，技術名詞保持英文（如 API、Docker、Kubernetes）
- **語氣**：像跟朋友聊天的口吻，白話易懂，避免過度學術
- **解釋**：技術概念先用比喻或白話說明，再展示程式碼
- **Emoji**：近期文章會適度使用 emoji 增加可讀性（如 ✅❌💡🚀📊）
- **ASCII 圖**：善用文字方塊圖說明架構和流程
- **比較表格**：常用 Markdown 表格比較技術方案的優缺點
- **實戰導向**：強調實際經驗和踩坑心得，而非純理論

### 6. 圖片處理

- 圖片放在文章同目錄下
- 引用使用裸檔名：`![描述](image.png)` 或 `![](image.png)`
- 縮圖（thumbnail）偏好 `.png` 或 `.webp` 格式
- 截圖命名使用 kebab-case 英文

---

## Agent Skill：部落格文章產生器

當使用者要求撰寫新的部落格文章時，請遵循以下流程：

### 觸發條件
- 使用者說「寫一篇文章」、「幫我寫 blog」、「產生文章」等
- 使用者提供主題或關鍵字

### 執行流程

1. **確認主題與分類**
   - 確認文章主題
   - 從可用分類中選擇最適合的 category
   - 建議合適的 tags

2. **建立檔案結構**
   - 以今天日期建立目錄：`site/content/posts/YYYY-MM-DD-kebab-case-slug/`
   - 建立 `index.mdx`

3. **產生 Frontmatter**
   - 依照上述格式填寫所有欄位
   - `date` 使用當天日期 + `10:00:00 +0800`
   - `slug` 使用有意義的英文 kebab-case

4. **撰寫文章內容**
   - 遵循技術文章標準結構
   - 使用繁體中文 + 英文技術名詞
   - 加入 ASCII 方塊圖說明架構
   - 加入比較表格
   - 加入程式碼範例（標明語言）
   - 語氣親切白話

5. **檢查清單**
   - [ ] Frontmatter 所有欄位都已填寫
   - [ ] Category 使用已定義的分類名稱
   - [ ] 日期格式正確（含 +0800 時區）
   - [ ] 圖片引用使用裸檔名
   - [ ] 文章以 `## 前言` 開頭
   - [ ] 有 `## 總結` 或 `## 心得` 結尾
   - [ ] 有 `## 參考資料` 章節（如適用）
