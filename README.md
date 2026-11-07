# Hasmukai Portfolio

Astroで作る、Xのプロフィール画面を参考にしたポートフォリオです。

## 開発

Node.js 22.12.0以上を使用します。

```sh
npm ci
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

`npm run build` で静的サイトを `dist/` に出力します。

## ページ

- `/`：プロフィールと記事公開のお知らせ
- `/blog/`：ブログ一覧（公開日の新しい順）
- `/blog/ファイル名/`：記事本文

「検索」は未実装で、押しても何も起きません。

## 記事の追加

`src/content/blog/` にMarkdownファイルを追加します。例：`first-post.md`

```markdown
---
title: 'はじめての記事'
description: 'この記事の短い紹介文です。'
pubDate: 2026-11-07
tags: ['日記']
draft: false
---

## 見出し

ここに記事の本文を書きます。
```

`title`、`description`、`pubDate` は必須です。`tags` は省略できます。
`draft: true` の記事は、一覧・タイムライン・記事ページのすべてから除外されます。
公開日には実際の公開日を指定してください（予約公開機能はありません）。

記事を追加して再ビルドすると、ブログ一覧とホームのタイムラインに自動で反映されます。
最初は記事を用意せず、空の状態を表示しています。

## プロフィールの変更

- 名前・所属・外部リンク：`src/data/profile.ts`
- アイコン：`public/images/avatar.jpg`
- 共通デザイン：`src/styles/global.css`

Astroの公式ガイド：[ルーティング](https://docs.astro.build/en/guides/routing/)、
[コンテンツコレクション](https://docs.astro.build/en/guides/content-collections/)。
