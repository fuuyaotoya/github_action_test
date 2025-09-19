# GitHub Actions テストプロジェクト

このプロジェクトは、GitHub ActionsとPull Requestのワークフローをテストするためのサンプルプロジェクトです。

## 機能

- GitHub Actionsによる自動テスト
- Pull Request時の自動チェック
- Node.jsを使用したサンプルアプリケーション
- Jestによるユニットテスト

## セットアップ

```bash
# 依存関係のインストール
npm install

# テストの実行
npm test

# 開発サーバーの起動
npm start
```

## GitHub Actionsワークフロー

`.github/workflows/` ディレクトリに以下のワークフローが設定されています：

- **ci.yml**: Pull Request時に実行される継続的インテグレーション
- **test.yml**: プッシュ時に実行されるテストワークフロー

## Pull Requestの作成

1. 新しいブランチを作成
2. 変更をコミット
3. GitHubにプッシュ
4. Pull Requestを作成
5. 自動テストが実行されることを確認

## プロジェクト構造

```
├── .github/
│   ├── workflows/      # GitHub Actions ワークフロー
│   └── pull_request_template.md  # PRテンプレート
├── src/                 # ソースコード
│   └── index.js
├── tests/              # テストファイル
│   └── index.test.js
├── package.json
└── README.md
```