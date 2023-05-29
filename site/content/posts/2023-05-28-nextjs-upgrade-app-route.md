---
featured: true
title: NEXTJS 13.3.4 踩坑筆記，server side compoent 時代來臨 - migrate page route to app route 
date:  2023-05-28 01:01:01 +0800
thumbnail: nextjs.png
category: Frontend
tags: ['React','Next','upgrade','app route']
description : NEXTJS 13 昇級筆記
author : Mark Ku
slug: nextjs-upgrade-app-route
---
# NEXTJS 13.3.4 踩坑筆記，server side compoent 時代來臨 - migrate page route to app route 
##  前言
為了重寫我們的德國電商網站，我進行了深入評估，並決定採用 Next js 的最新穩定版本，Next 13.4.3，這個版本的 SEO meta api和server side component功能具有極高的吸引力，且加上未來許多的功能都將以app route為主要實作方向，因此我們選擇採用app route對我們來說毫無疑問。

## 1 [Server side component](https://nextjs.org/docs/getting-started/react-essentials)

### 1.1 App folder 下的，預設都是 server side component 
By default, all components on NextJS 13 inside the App folder are server components. And Server Components cannot use client features such as useState, useEffect, etc.

For now, to use third-party components the solution is to create a wrapper for each client component that doesn't include the directive 'use client':

### 1.2 Server side component 好處
Server Components的運作方式是在伺服器上進行渲染，從而只傳遞需要的JS Bundle程式碼至用戶端瀏覽器，不必要的js則不會被下載，這個特性能有效地減少網路傳輸量，提高效能和速度。

### 1.3限制

不能使用 useState 和 useReducer、 Hooks、useEffect、useLayoutEffect 

### 1.4 如果要使用 clinet side component ，每個component 前都要加上這一樣
```
"use client";
import xxx
...
```

## 2 新 useRoute 
```
import { useRouter, useParams, usePathname ,useSearchParams } from 'next/navigation';
```

### 2.1 在新的 useRoute ，並沒有 locale 
```
const { locale } = useRouter(); 
```

## 2.2 路由及資料夾結構
這種改動的方式，更直觀從資料夾結構了解是頁面還是元件。

| Url | Page route| App route |
| -------- | -------- | -------- |
| /     | /page/index.tsx     | /app/page.tsx     |
| /about-us     | /page/about-us.tsx     | /app/about-us/page.tsx     |

## 2.3 要資料的方式調整
新的寫法並不透過 getStaticProps、getServerSideProp 去要資料

```
async func getData() {
  const res = await fetch ("https://api.xxx.com/...");
  return res.json();
}

export default async function About() {
  const name = await getData();
  return "...";
}

```

## 3. 提供 [meta api](https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata) 替代  next/head，更容易的針對每個頁面給不同 seo 的 meta data  
### 3.1 Static Metadata
```
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: '...',
  description: '...',
};
 
export default function Page() {}
```
### 3.2 Dynamic Metadata
```
import { Metadata, ResolvingMetadata } from 'next';
 
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;
 
  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json());
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
 
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}
 
export default function Page({ params, searchParams }: Props) {}
```

## 4 套件受到的影響
### 4.1 i18n 套件 ( 推薦 )
剛昇級完後就會發現 i18n 套件就無法使用，新版 useRouter 也不提供 locale 可以使用

~~const { locale } = useRouter(); ~~

[相關文章](https://next-intl-docs.vercel.app/docs/next-13/server-components )

試了好幾個 i18n 套件，發現這個最好用

```
import { useLocale } from 'next-intl';

const locale = useLocale();
```
## 4.2 react query 注入方式
[相關文章](https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/)

## 4.4 context api 載入方式
[相關文章](https://codevoweb.com/setup-react-context-api-in-nextjs-13-app-directory/)

## 5 [Turbopack](https://nextjs.org/docs/architecture/turbopack)( 仍在 Beta )
最後可以持續觀注的，Next.js 13 加了一個名為 Turbopack 的新的 JavaScript 打包工具，它被稱為 Webpack 的繼承者，Turbopack 由 Webpack 由 Rust 撰寫，號稱比原始 Webpack 快 700 倍（並且比 Vite 快 10 倍）。

## 6. 結論
無可否認，Next js 的更新速度令人驚訝，經常在我醒來之後就有了新的穩定版本，每次改版都會有點小陣痛，但大概都花個一至兩天就能昇級，也保留舊的寫法。  

app route 改動的幅度有點大，且有點痛，但 app route出現，正式掀開 server side component 的序幕。
