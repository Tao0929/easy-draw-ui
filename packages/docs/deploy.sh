#!/usr/bin/env sh

# 忽略错误
set -e
# 进入目录
cd packages/docs/
# 安装依赖
npm install
# 构建
npm run docs:build

# 进入待发布的目录
cd .vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果是部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tao0929/easy-draw-ui.git main:gh-pages

cd -