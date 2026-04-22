# 版本管理说明

## 为什么 GitHub 看起来像“覆盖”

GitHub 仓库首页默认展示的是当前分支的最新文件快照，所以每次 `push` 看起来都像“把上一次内容覆盖了”。

实际上历史并没有丢失，完整版本轨迹保存在以下位置：

- `Commits`：查看每次提交的文件差异。
- `Tags`：查看明确命名的版本节点，例如 `v1.3.0`。
- `Releases`：查看对外发布说明和下载入口。
- `CHANGELOG.md`：查看人工整理后的版本摘要。

## 本仓库版本规则

本仓库采用语义化版本：

- `MAJOR`：架构分层、调度模型或记忆系统发生不兼容调整。
- `MINOR`：新增完整能力，如新规则机制、新技能体系、新配置中心。
- `PATCH`：文档整理、链接修复、忽略规则补充、非破坏性修正。

示例：

- `v1.1.0`：引入 Self-Healing Loop 与 Cascade Mode。
- `v1.2.0`：引入 Skill Creator 与 Root Cause Self-Healing。
- `v1.3.0`：引入 Global Hooks 与 System Config。
- `v1.3.1`：整理公开文档入口并补齐版本管理文件。

## 建议维护流程

1. 开发完成后先提交清晰的 commit。
2. 同步更新 `CHANGELOG.md`。
3. 确认本次改动不仅“可触发”，还已经完成了验收、验证和沉淀。
4. 如果达到可发布节点，则打 tag，例如 `v1.3.1`。
5. 推送分支和 tag 到 GitHub。
6. 按 [release-checklist.md](release-checklist.md) 逐项检查发版前条件。
7. 需要对外说明时，在 GitHub 创建 Release。

## 远端状态校验

在当前 Windows + Trae 终端环境下，`git status` 或 `git branch -vv` 可能因为本地 `origin/main` tracking ref 未及时刷新，错误显示 `ahead`。

遇到这种情况时，不要只看本地 tracking 状态，优先用下面两条命令确认远端真实结果：

```bash
git ls-remote --heads origin main
git ls-remote --tags origin vX.Y.Z
```

判断原则：

- `git ls-remote --heads origin main` 用来确认远端主分支是否已经包含最新提交
- `git ls-remote --tags origin vX.Y.Z` 用来确认目标版本 tag 是否已成功推送
- 如果 `ls-remote` 结果正确，但 `git status` 仍显示 `ahead`，按“本地 tracking 噪音”处理，不把它作为唯一发版依据

## Commit 规范

建议继续使用下面这类前缀：

- `feat:` 新功能或新机制
- `fix:` 缺陷修复
- `docs:` 文档调整
- `refactor:` 重构但不改行为
- `chore:` 杂项维护

更完整的协作要求见 [CONTRIBUTING.md](../CONTRIBUTING.md)。

## Tag 规范

- tag 名称统一为 `vX.Y.Z`
- tag 只打在“可回看、可说明、可复现”的提交上
- 不要给临时试验提交打 tag

## 发布建议

公开仓库建议至少维护这四个入口：

- `README.md`：项目简介和快速开始
- `docs/architecture.md`：架构说明
- `CHANGELOG.md`：版本变更记录
- `CONTRIBUTING.md`：协作和提交规范
- `Releases/Tags`：对外版本节点
