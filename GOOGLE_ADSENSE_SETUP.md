# Google AdSense 設定說明

由於 `gatsby-plugin-google-adsense` 已被棄用，我們已將其移除。

## 如何添加 Google AdSense

如果你需要使用 Google AdSense，可以通過以下方式添加：

### 方法 1: 使用 React Helmet（推薦）

在你的頁面或組件中添加：

```jsx
import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2396931274355535"
          crossOrigin="anonymous"
        />
      </Helmet>
      {/* 你的內容 */}
    </>
  );
}
```

### 方法 2: 創建自定義 HTML 組件

在 `gatsby-ssr.js` 和 `gatsby-browser.js` 中添加：

```javascript
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="google-adsense"
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2396931274355535"
      crossOrigin="anonymous"
    />
  ]);
};
```

### 顯示廣告單元

在需要顯示廣告的地方添加：

```jsx
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-2396931274355535"
  data-ad-slot="YOUR_AD_SLOT_ID"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({});
</script>
```

## Publisher ID

你的 Publisher ID: `ca-pub-2396931274355535`
