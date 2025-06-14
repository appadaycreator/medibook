# MediBook

MediBookは、医療記録を簡単に管理できるPWA（Progressive Web App）アプリケーションです。

ユーザー向け画面は`index.html`、管理者向け画面は`admin/index.html`からアクセスできます。

## 機能

- 医療記録の管理
- オフライン対応
- モバイルフレンドリーなUI
- セキュアなデータ管理
- Supabaseを利用した予約情報のクラウド保存（無料プランで運用可能）

## 技術スタック

- HTML5
- CSS3
- JavaScript
- PWA（Service Worker）
- レスポンシブデザイン

## セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/medibook.git
```

2. ローカルサーバーで実行
```bash
# 例：Pythonの簡易サーバーを使用
python -m http.server 8000
```

3. ブラウザでアクセス
```
http://localhost:8000
```

## 管理者ログイン

デモ用の管理者アカウントは以下の資格情報を使用してください。

- 管理者ID: `admin`
- パスワード: `password`

## プロジェクト構成

```
medibook/
├── index.html          # メインシステムファイル
├── admin/              # 管理者画面
├── manifest.json       # PWA設定
├── sw.js              # Service Worker
├── sitemap.xml        # SEO設定
├── robots.txt         # クローラー設定
├── privacy.html       # プライバシーポリシー
├── terms.html         # 利用規約
├── contact.html       # お問い合わせ
├── usage.html         # 使い方ページ
├── icons/             # PWAアイコン
└── images/            # 画像ファイル
```

## 使い方

基本的な操作方法については[使い方ページ](usage.html)を参照してください。

## データベース設定

予約データは [Supabase](https://supabase.com/) の無料プランで保存できます。
`index.html` と `admin/index.html` の `SUPABASE_URL` と `SUPABASE_ANON_KEY` を
ご自身のプロジェクト情報に置き換えてください。無料枠の範囲内であれば
月額0円（100円未満）で利用可能です。

## ライセンス

MIT License

## お問い合わせ

お問い合わせは[お問い合わせフォーム](contact.html)からお願いします。

## 変更点

予約は管理画面で承認されるまで "承認待ち" の状態となります。
予約フォームでは希望日に当日を指定できます。
検索画面から予約内容を変更・キャンセルできるようになりました。
