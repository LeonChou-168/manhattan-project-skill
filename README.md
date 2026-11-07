# 曼哈顿 Skill：把曼哈顿工程的组织方法做成 AI Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![AI Skill](https://img.shields.io/badge/agent%20skill-Cursor%20%7C%20Claude-6f42c1.svg)](#安装与使用)
[![Evidence Cards](https://img.shields.io/badge/evidence%20cards-23-brightgreen.svg)](corpus/index.md)

> 23 张档案证据卡支撑的八段工作流 + 可复制文书模板 + 两门检查单。

## 这是什么

一份把**超大型成功工程的组织经验**转成 AI 可执行工作流的开源 skill。

用户扮演 Oppenheimer（技术统帅），AI 分饰 Groves（需求裁决、/grill 追问、资源编排）与技术人员（并行执行），
按八段模式推进项目：

**明确需求 → 遍历人才 → 授权领导 → 招募人才 → 集中管理/多点并行 → 技术决策 → 试点试验 → 交付结果**

- **适用**：目标明确但路线高度不确定、失败代价远大于探索成本、有真实截止时间的任务。
- **不适用**：需求清楚、单一方案可行的常规任务——直接做，不要启用本模式。

## 安装与使用

无需任何依赖，`skill/` 下四份 Markdown 即可使用。**skill 本身不含背景与来源内容**，
来历与证据档案在 `docs/` 与 `corpus/`，安装时不需要。

**Cursor**

```bash
mkdir -p ~/.cursor/skills/manhattan-project
cp skill/*.md ~/.cursor/skills/manhattan-project/
```

**Claude Code**（或其他兼容 SKILL.md 的 agent）

```bash
mkdir -p ~/.claude/skills/manhattan-project
cp skill/*.md ~/.claude/skills/manhattan-project/
```

**调用方式**：在对话里显式点名，例如「用曼哈顿模式启动」。
SKILL.md frontmatter 中设置了 `disable-model-invocation: true`，避免被模型自动触发。

运行时会在项目根目录生成 `.manhattan/`（作战目标、授权书、线卡、判别点报告、裁决记录、两门检查单等），
全部是 Markdown，可随项目提交，用于跨会话恢复。详见 [skill/templates.md](skill/templates.md)。

## 目录导航

本仓库分两层：`skill/` 是可安装的**工程实践内容**；`docs/` 与 `corpus/` 是**背景、来源与证据档案**。

| 路径 | 内容 |
|---|---|
| [skill/SKILL.md](skill/SKILL.md) | 准入判定、角色分工、八段工作流、四种裁决、红线、自检清单 |
| [skill/templates.md](skill/templates.md) | 文书模板、两门检查单、按阶段分配的 grill 问题库 |
| [skill/operators.md](skill/operators.md) | 15 个组织算子的触发 / 动作 / 反模式速查 |
| [skill/examples.md](skill/examples.md) | 完整走一遍八段流程的示例（2 条线，含裁决与复盘） |
| [docs/origin.md](docs/origin.md) | 来历、七步制作过程、研究方法、待办 |
| [docs/evidence.md](docs/evidence.md) | 证据分级（A–E）与 15 个算子的史实锚点 |
| [docs/design.md](docs/design.md) | 交互设计蓝图（v0 历史记录） |
| [docs/canvases/](docs/canvases/) | 7 份过程画布（Cursor Canvas 文件，需在 Cursor 中打开） |
| [corpus/index.md](corpus/index.md) | 23 张证据卡总览、算子覆盖检查、待补清单 |
| [corpus/cards/](corpus/cards/) | 证据卡：frontmatter + 短摘录 + 转译 + 不可迁移说明 |
| [corpus/sources.md](corpus/sources.md) | 来源登记与 A–E 证据分级 |

## 免责声明

- 本项目是**组织管理方法论**的研究与整理，不包含任何武器设计、核技术或工程操作细节。
- 史实引述来自公开档案与官方史，证据卡只保留短摘录并标注页码/章节；完整出处见
  [corpus/sources.md](corpus/sources.md)。
- 「曼哈顿模式」是研究性框架，不是管理建议；请结合自身目标、预算与合规要求取用。
- 本项目与任何政府、军事机构无关联。

## 许可

[MIT](LICENSE) © 2026 Leon Chou (LeonChou-168)。
文中引用的史料版权归原机构/作者所有，详见 [corpus/sources.md](corpus/sources.md)。

## 反馈

欢迎提 Issue 讨论算子有效性、补充案例或纠正史实。

## 背景与制作过程

这个 skill 怎么来的、当初怎么做出来的、研究方法与待办，见 [docs/origin.md](docs/origin.md)；
算子证据与出处见 [docs/evidence.md](docs/evidence.md)；交互设计过程见 [docs/design.md](docs/design.md)。
