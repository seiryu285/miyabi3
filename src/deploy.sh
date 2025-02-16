#!/bin/bash
# deploy.sh: ウェブサイト全体を GitHub にアップロードするスクリプト

# -------------------------------
# 設定項目 ※各自の環境に合わせて変更してください
# -------------------------------
# プロジェクトのルートディレクトリ（絶対パスまたは相対パス）
PROJECT_DIR="/path/to/your/project"

# リモートリポジトリのURL（GitHubなどのリポジトリURL）
REMOTE_URL="https://github.com/YourUsername/YourRepository.git"
# -------------------------------

# プロジェクトディレクトリに移動
cd "$PROJECT_DIR" || { echo "エラー: プロジェクトディレクトリが見つかりません！"; exit 1; }

# Gitリポジトリが初期化されていない場合、初期化を実施
if [ ! -d ".git" ]; then
    echo "Gitリポジトリを初期化中..."
    git init
fi

# .gitignoreファイルが存在しない場合は作成（不要なファイルを除外）
if [ ! -f ".gitignore" ]; then
    echo ".gitignoreを作成中..."
    cat <<EOF > .gitignore
# Node.js関連（必要に応じて調整）
node_modules/
dist/

# OS固有のファイル
.DS_Store
Thumbs.db
EOF
fi

# 全ファイルをステージング（追加）
echo "全ファイルをGitに追加中..."
git add .

# コミットを作成
echo "コミットを作成中..."
git commit -m "Initial commit - ウェブサイトの初期アップロード"

# リモートリポジトリ「origin」が未設定の場合のみ追加
if ! git remote | grep -q "origin"; then
    echo "リモートリポジトリを追加中..."
    git remote add origin "$REMOTE_URL"
fi

# リモートリポジトリへプッシュ（初回は -u オプションで上流ブランチを設定）
echo "リモートリポジトリにプッシュ中..."
git push -u origin master

echo "アップロード完了！"
