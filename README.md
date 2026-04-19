# TraeCN-Framework

> 专为 Trae IDE 打造的 AI 编程助手框架。基于 Read/Write 工具的结构化记忆 + Skill 技能调度。

## 核心理念

传统方式用纯文本文件和庞大 Prompt 维护记忆和角色，存在记忆污染、多角色冲突、效率低下等问题。

本框架的方案：
- **结构化记忆**：Markdown 表格文件，易读、易更新、易搜索
- **Skill 技能调度**：通过 `/指令` 触发对应 Skill，任务隔离
- **Coordinator 模式**：主 Agent 负责任务拆解与调度，子任务委派给 Skill

## 目录结构

```
项目根目录/
├── .trae/
│   ├── rules/              # 框架规则
│   │   ├── agent.md        # Agent 核心身份
│   │   ├── 00-Core-Architecture.md  # 核心架构
│   │   ├── dev-standards.md         # 开发交付标准
│   │   ├── collaboration.md         # 多Agent协作规则
│   │   ├── session-handoff.md       # 会话交接
│   │   ├── growth.md                # 长期成长规则
│   │   └── evolution.md             # 闭环进化规则
│   └── skills/             # 原生技能
│       ├── 分析/           # 需求分析
│       ├── 设计/           # 架构设计
│       ├── 测试/           # 质量验证
│       ├── 部署/           # 项目部署
│       ├── 复盘/           # 闭环复盘
│       ├── session-handoff/ # 会话交接
│       ├── humanizer-zh/   # 去除AI写作痕迹
│       ├── 问题解决/       # 问题分析与修复
│       ├── 项目归档/       # 项目归档管理
│       └── template/       # 技能模板
├── Core/记忆/              # 记忆文件（用户数据，不上传）
│   ├── user_scope.md       # 用户偏好、踩坑
│   ├── project_scope.md    # 项目状态
│   └── session-handoff.md  # 会话传递
├── Builds/                 # 已完成项目
├── Skills/                 # 自定义技能
├── Evolve/                 # 进化日志、错题本
└── Backup/                 # 备份
```

## 快速开始

### 方法一：手动复制
1. 将本项目的 `.trae` 文件夹整体复制到你的项目根目录
2. 打开 `.trae/rules/agent.md`，将 `<your-agent-name>` 替换为你的助手名字
3. 在 Trae IDE 中开启新会话，你的专属 AI 助手即可上线

## 如何使用 Skill

在聊天框输入 `/指令名` 即可触发对应技能：

| 指令 | 功能 |
|------|------|
| `/分析` | 需求分析与任务拆解 |
| `/设计` | 系统架构设计 |
| `/测试` | 质量验证与bug定位 |
| `/部署` | 项目部署与CI/CD |
| `/复盘` | 执行闭环复盘 |
| `/项目归档` | 项目完成存档 |
| `/结束会话` | 保存并交接会话 |

## 如何编写自定义 Skill

1. 在 `.trae/skills/` 下创建新目录，如 `my-skill/`
2. 创建 `SKILL.md` 文件（参考 template/SKILL_TEMPLATE.md）
3. 在聊天框说 `/my-skill` 即可触发

## 进化里程碑

| 阶段 | 目标 | 达成条件 |
|------|------|----------|
| Lv.1 | 规则稳定 | 核心规则完善，95%场景覆盖 |
| Lv.2 | 记忆驱动 | 记忆库准确率>90%，偏好零偏差 |
| Lv.3 | 预判初现 | 能提前预判60%的下一步需求 |
| Lv.4 | 数字孪生 | 你不用说，我就知道你要什么 |

## License

MIT
