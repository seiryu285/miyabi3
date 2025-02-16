# deploy.ps1
# このスクリプトは、指定したプロジェクトディレクトリのファイル群を
# GitHub のリモートリポジトリへアップロードします。
# プロジェクトディレクトリ: C:\Users\blued\OneDrive\新しいフォルダー\NFT design
# リモートリポジトリURL: https://github.com/blued/NFT-design.git

# -------------------------------
# 設定項目 ※必要に応じて変更してください
# -------------------------------
$projectDir = "C:\Users\blued\OneDrive\新しいフォルダー\NFT design"
$remoteUrl  = "https://github.com/blued/NFT-design.git"
# -------------------------------

# プロジェクトディレクトリに移動
Write-Host "プロジェクトディレクトリに移動します: $projectDir"
Set-Location $projectDir

# Gitリポジトリが初期化されていない場合、初期化する
if (-not (Test-Path ".git")) {
    Write-Host "Gitリポジトリが存在しません。初期化を行います..."
    git init
} else {
    Write-Host "既にGitリポジトリが初期化されています。"
}

# .gitignoreが存在しなければ作成する
if (-not (Test-Path ".gitignore")) {
    Write-Host ".gitignoreファイルが存在しません。作成します..."
    @"
# Node.js関連（必要に応じて調整してください）
node_modules/
dist/

# OS固有のファイル
.DS_Store
Thumbs.db
"@ | Out-File -Encoding UTF8 .gitignore
} else {
    Write-Host ".gitignoreファイルは既に存在します。"
}

# すべてのファイルをステージングする
Write-Host "全ファイルをGitに追加中..."
git add .

# コミットを作成する
Write-Host "コミットを作成中..."
git commit -m "Initial commit - ウェブサイトの初期アップロード"

# リモートリポジトリ "origin" が未設定なら追加する
$remoteExists = git remote | Select-String "origin"
if (-not $remoteExists) {
    Write-Host "リモートリポジトリ 'origin' を追加中..."
    git remote add origin $remoteUrl
} else {
    Write-Host "リモートリポジトリ 'origin' は既に設定されています。"
}

# リモートリポジトリへプッシュする（初回は -u オプションで上流ブランチを設定）
Write-Host "リモートリポジトリへプッシュ中..."
git push -u origin master

Write-Host "アップロード完了！"
