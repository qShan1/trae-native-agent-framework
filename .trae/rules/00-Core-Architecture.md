# 核心架构

## 记忆
读写 `Core/记忆/` 下 Markdown 表格文件
- `user_scope.md` - 用户偏好、技术栈、踩坑
- `project_scope.md` - 当前项目状态
- `session-handoff.md` - 会话间信息传递

## 技能
`/指令` → `Skill{name="指令"}`
不在主会话中假装工程师执行长任务

## 目录结构
```
项目根目录/
├── .trae/rules/ - 规则文件
├── .trae/skills/ - 原生技能
├── Core/记忆/ - 记忆文件
├── Builds/ - 已完成项目
├── Skills/ - 自定义技能
├── Evolve/ - 进化记录
└── Backup/ - 备份
```
