## アプリについて

ポートフォリオ用に作成したタスク管理アプリ(Native 版)です。  
こちらはクライアント部分になり、API サーバーのコードは<a href="https://github.com/yuuta-wata/Todo-App-Server" alt="Todo-App-Server">こちら</a>になります。

## 開発環境

- MacBook Pro

  - macOs Catalina V.10.15.7

- node.js

  - V.12.14.1

- yarn

  - V.1.22.4

- Ruby
  - V2.7.0

## 実装機能

- ログイン/ログアウト機能
- アカウント新規作成機能
- テストユーザーログイン機能
- タスク投稿機能
- タスク投稿一覧機能
- タスク削除機能
- トークン認証機能

## 使用技術

**言語**

- TypeScript

**フレームワーク/主要ライブラリ**

- React-Native
- Redux
  - Redux-Observable
  - Redux-Persist

**クエリ**

- GraphQL

## ローカルでの起動方法

**１**、先に API サーバーである<a href="https://github.com/yuuta-wata/Todo-App-Server" alt="Todo-App-Server">Todo-App-Server</a>をローカルで起動してください。  
起動方法はページ先の README に記載しています。

**２**、お好きなディレクトリにクローンしてください。

```bash
% git clone https://github.com/yuuta-wata/Todo-Native.git
```

**3**、プロジェクトディレクトリ直下に.env ファイルを作成し,下記をコピペしてください。  
(注).env ファイルは通常公開しません、今回はポートフォリオ作成なので公開しています。

```
API_SERVER_URL=http://localhost:4000/graphql
REFRESH_TOKEN_URL=http://localhost:4000/refresh_token

```

**4**、アプリを起動します。  
yarn をインストールしてない方は別途インストールをお願いします。

```bash
% yarn
% cd ios
% pod install
% cd ..
% yarn start

Xcodeでプロジェクトのiosフォルダを開き、シュミレーターでアプリを起動してください。
iPhoneXR(13.6)で動作確認済みです。

```
