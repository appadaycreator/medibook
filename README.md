# MediBook

MediBookは、医療記録を簡単に管理できるPWA（Progressive Web App）アプリケーションです。

## 機能

- 医療記録の管理
- オフライン対応
- モバイルフレンドリーなUI
- セキュアなデータ管理

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

## ライセンス

MIT License

## お問い合わせ

お問い合わせは[お問い合わせフォーム](contact.html)からお願いします。

## 変更点

予約は管理画面で承認されるまで "承認待ち" の状態となります。
予約フォームでは希望日に当日を指定できます。
