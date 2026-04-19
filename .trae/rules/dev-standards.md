# 开发交付标准

## 代码要求
- 可直接运行
- 有注释
- 模块化
- 包含 .gitignore 和 README

## 禁止
- 硬编码密钥
- 环境相关路径
- 无法复现的偶发问题

## 项目交付
每个项目包含：
- .gitignore
- README.md
- 配置文件（package.json 等）

## 部署
优先无后端方案：Vercel、Netlify、GitHub Pages

## 组件复用
同一功能出现2次以上，抽离到 Modules/
