# Healthy Habits Lamp 🕯️

習慣の継続を視覚化する美しいWebアプリケーション

## 特徴

- 継続日数に応じて灯の明るさと背景が変化
- 0-6日目: 深夜（暗い背景）
- 7-13日目: 夜（少し明るく）
- 14-20日目: 夜明け前（葉っぱの装飾が追加）
- 21日目以降: 朝焼け（明るい背景と光の粒子）

## ローカルで実行

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## Vercelへのデプロイ

### 方法1: Vercel CLIを使用

```bash
# Vercel CLIのインストール（初回のみ）
npm i -g vercel

# デプロイ
vercel
```

### 方法2: GitHubと連携

1. このプロジェクトをGitHubリポジトリにプッシュ
2. [Vercel](https://vercel.com)にログイン
3. "Import Project"をクリック
4. GitHubリポジトリを選択
5. デプロイ設定を確認して"Deploy"をクリック

## 技術スタック

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- styled-jsx（アニメーション用）

## ビルド

```bash
npm run build
```

## ライセンス

MIT
