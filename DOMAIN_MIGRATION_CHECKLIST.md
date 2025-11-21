# 域名迁移 SEO 检查清单

## 已完成的配置 ✅

### 1. 301 永久重定向
- ✅ 在 `vercel.json` 中配置了从 `blog.markkulab.net` 和 `www.markkulab.net` 到 `blog.226network.com` 的 301 重定向
- ✅ 重定向规则会保留所有路径参数

### 2. Canonical URLs
- ✅ 安装并配置了 `gatsby-plugin-canonical-urls`
- ✅ 所有页面都会包含指向新域名的 canonical 标签

### 3. Sitemap
- ✅ 更新了 sitemap 配置，使用新域名 `https://blog.226network.com`
- ✅ Sitemap 位置: `https://blog.226network.com/sitemap-index.xml`

### 4. Robots.txt
- ✅ 创建了 robots.txt 文件，指向新的 sitemap
- ✅ 安装了 `gatsby-plugin-robots-txt` 自动生成

### 5. 环境变量
- ✅ 更新 `.env` 中的 `SITE_URL` 为 `https://blog.226network.com`
- ✅ 更新 `vercel.json` 中的环境变量

## 需要手动完成的步骤 📋

### 1. Google Search Console
1. 添加新域名 `blog.226network.com` 到 Google Search Console
2. 验证新域名所有权
3. 使用 "地址变更工具" (Change of Address Tool)
   - 在旧域名属性中选择 "设置" → "地址变更"
   - 选择新域名属性
   - 提交变更请求

### 2. Vercel 域名设置
1. 登录 Vercel 控制台
2. 在项目设置中添加 `blog.226network.com`
3. 配置 DNS:
   - 添加 A 记录或 CNAME 记录指向 Vercel
   - 等待 DNS 传播 (通常 24-48 小时)
4. **保留旧域名** `blog.markkulab.net` 的配置 (用于重定向)

### 3. Google Analytics
1. 更新 Google Analytics 中的默认 URL
2. 检查跟踪代码是否正常工作

### 4. Bing Webmaster Tools
1. 添加新域名到 Bing Webmaster Tools
2. 使用站点移动工具通知 Bing

### 5. 社交媒体和外部链接
1. 更新 Facebook、Twitter 等社交媒体的链接
2. 通知重要的反向链接网站
3. 更新电子邮件签名和其他营销材料

### 6. 监控和验证
部署后需要检查：
- [ ] 旧域名的所有页面是否正确 301 重定向到新域名
- [ ] 新域名的 SSL 证书是否正常
- [ ] Sitemap 是否可访问
- [ ] Robots.txt 是否正确
- [ ] Canonical 标签是否指向正确的新 URL
- [ ] Google Analytics 是否正常追踪
- [ ] 搜索排名是否保持稳定 (需要几周时间)

## 部署步骤

```bash
# 1. 提交更改
git add .
git commit -m "域名迁移: 从 blog.markkulab.net 到 blog.226network.com"
git push

# 2. Vercel 会自动重新部署

# 3. 重新构建以应用新配置
cd d:\Projects\NewBlog\site
gatsby clean
gatsby build
```

## 验证 301 重定向

部署后，可以使用以下工具验证：
- https://httpstatus.io/ - 检查 HTTP 状态码
- https://www.redirect-checker.org/ - 检查重定向链
- Chrome DevTools Network Tab - 查看响应头

## SEO 注意事项

1. **301 重定向是永久的** - 搜索引擎会将所有排名权重转移到新域名
2. **保持旧域名至少 6 个月** - 让搜索引擎有足够时间更新索引
3. **监控搜索流量** - 短期内可能会有小幅波动
4. **更新结构化数据** - 如果有 Schema.org 标记，确保 URL 更新

## 预期时间表

- DNS 传播: 24-48 小时
- Google 开始抓取新域名: 1-2 周
- 搜索排名稳定: 4-8 周
- 完全迁移完成: 3-6 个月
