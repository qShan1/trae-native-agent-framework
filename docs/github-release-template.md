# GitHub Release 文案模板

## 使用方式

每次发版时，复制下面的模板到 GitHub Release 描述框，再按当前版本内容替换占位文本。

## 通用模板

```md
## Overview

本次版本聚焦于 [一句话说明本次版本解决的核心问题]。

## Highlights

- [亮点 1：新增了什么能力]
- [亮点 2：优化了什么流程]
- [亮点 3：补齐了什么长期治理或稳定性问题]

## Changes

### Added

- [新增项 1]
- [新增项 2]

### Changed

- [调整项 1]
- [调整项 2]

### Fixed

- [修复项 1]
- [修复项 2]

## Impact

- 是否影响公开入口： [是 / 否]
- 是否影响协作流程： [是 / 否]
- 是否需要迁移操作： [是 / 否]

## Upgrade Notes

- [如果无需迁移，写“无特殊升级步骤”]
- [如果有目录、规则或配置变化，在这里说明]

## Verification

- [验证动作 1]
- [验证动作 2]

## Links

- Changelog: [CHANGELOG.md](<仓库中的 changelog 链接>)
- Docs: [docs/README.md](<仓库中的 docs 链接>)
- Tag: [vX.Y.Z](<当前 tag 链接>)
```

## 精简模板

适合 `PATCH` 版本，内容不多时可以直接用：

```md
## Overview

本次版本主要完成了 [一句话总结]。

## Changes

- [变更 1]
- [变更 2]
- [变更 3]

## Verification

- [验证方式]

## Links

- Changelog: [CHANGELOG.md](<仓库中的 changelog 链接>)
- Tag: [vX.Y.Z](<当前 tag 链接>)
```

## 编写建议

- 第一段先写“为什么发这个版本”，不要一开始就堆文件名
- `Highlights` 只保留 3 条左右，方便仓库访客快速扫读
- `Changes` 与 `CHANGELOG.md` 保持同一口径，但可以更偏对外表达
- 如果是长期治理类版本，明确说明它解决了什么维护成本问题

## v1.4.0 建议文案

```md
## Overview

This release turns TraeCN-Framework from a "documented framework" into a "closed-loop and deliverable workflow framework".

## Highlights

- Added a shared closed-loop execution contract for built-in commands, skills and hooks
- Productized lifecycle commands like `/初始化`, `/重置` and `/结束` with verification and recovery paths
- Aligned rules, docs, skill templates and release governance around execution depth instead of surface expansion

## Changes

### Added

- Added `闭环执行矩阵.md` as the shared execution contract
- Added `生命周期指令手册.md` for repeatable lifecycle operations

### Changed

- Updated built-in skills to include concrete execution steps, validation actions and persistence outputs
- Updated README and public docs to better explain the project for open-source visitors
- Updated templates and release docs so future skills and versions inherit the same delivery standard

## Impact

- 是否影响公开入口：是
- 是否影响协作流程：是
- 是否需要迁移操作：否

## Upgrade Notes

- 无特殊升级步骤
- 建议从 `README.md` 和 `docs/README.md` 重新了解当前版本的使用入口与治理结构

## Verification

- Reviewed repository docs and release files for v1.4.0 consistency
- Ran diagnostics on the updated markdown files and confirmed no newly introduced issues
```
