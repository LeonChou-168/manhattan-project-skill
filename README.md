# 曼哈顿 Skill：把曼哈顿工程的组织方法做成 AI Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![AI Skill](https://img.shields.io/badge/agent%20skill-Cursor%20%7C%20Claude-6f42c1.svg)](#安装与使用)
[![Evidence Cards](https://img.shields.io/badge/evidence%20cards-23-brightgreen.svg)](corpus/index.md)

> 从「曼哈顿工程是什么」到一套可用 AI skill 的完整工作留档：**23 张档案证据卡 + 八段工作流 + 可复制文书模板**。
> 打包于 2026-08-14 · 维护者 [LeonChou-168](https://github.com/LeonChou-168)

## 这是什么

一份把**超大型成功工程的组织经验**转成 AI 可执行工作流的开源 skill。

用户扮演 Oppenheimer（技术统帅），AI 分饰 Groves（需求裁决、/grill 追问、资源编排）与技术人员（并行执行），
按八段模式推进项目：

**明确需求 → 遍历人才 → 授权领导 → 招募人才 → 集中管理/多点并行 → 技术决策 → 试点试验 → 交付结果**

- **适用**：目标明确但路线高度不确定、失败代价远大于探索成本、有真实截止时间的任务。
- **不适用**：需求清楚、单一方案可行的常规任务——直接做，不要启用本模式。

## 安装与使用

无需任何依赖，`skill/` 下三份 Markdown 即可使用。

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

## 目录导航

| 路径 | 内容 |
|---|---|
| [skill/SKILL.md](skill/SKILL.md) | 角色分工、八段工作流、四种技术裁决、红线 |
| [skill/templates.md](skill/templates.md) | 作战目标 / 授权书 / 线卡 / 接口协议 / 裁决记录 / 11 问 grill 库 |
| [skill/operators.md](skill/operators.md) | 15 个组织算子的史实锚点与关键原文 |
| [corpus/index.md](corpus/index.md) | 23 张证据卡总览、算子覆盖检查、待补清单 |
| [corpus/cards/](corpus/cards/) | 证据卡：YAML frontmatter + 短摘录 + 转译 + 不可迁移说明 |
| [corpus/sources.md](corpus/sources.md) | 来源登记与 A–E 证据分级 |
| [corpus/design/blueprint.md](corpus/design/blueprint.md) | 交互蓝图、八段模式 ↔ 算子卡映射、设计决策 |
| [canvases/](canvases/) | 7 份过程画布（Cursor Canvas 文件，`import ... from "cursor/canvas"`，需在 Cursor 中打开） |

## 缘起

开发者观影《奥本海默》后，被曼哈顿计划的推进模式震撼，希望把超大型成功工程的
组织经验做成 AI skill。提炼出的八段模式：
**明确需求 → 遍历人才 → 授权领导 → 招募人才 → 集中管理/多点并行 → 技术决策 → 试点试验 → 交付结果**。
交互设定：用户扮演 Oppenheimer（技术统帅），AI 分饰 Groves（需求裁决、/grill 追问、
资源编排）与技术人员（并行执行）。

## 工作路线（七步）

1. **案例罗列**：收集全球可采纳的超大型成功工程案例（`canvases/mega-project-case-catalog`）。
2. **档案分级**：按史料厚度 T 与可靠度 R 两轴筛选，定出 S/A 档核心案例，
   降级了公开档案不足以独立验证组织细节的案例（`canvases/archive-grade-screen`）。
3. **关联罗列**：S/A 档案例的官方史、解密档案、子工程、关键人物全目录
   （`canvases/sa-related-catalog`）。
4. **价值定位**：标出每份文献里能直接抽出组织算子的章节，技术工艺/人物传记/外交
   辞令跳过（`canvases/sa-value-locus`）。
5. **两轮吸收**：第一轮按算子抽 16 张证据卡（并行/杀线/串联/试验门/发布门等）；
   第二轮带着八段模式回挖 Hewlett 官方史第 3/5/7 章，补 7 张卡（选帅授权、招募、
   围栏内开放、接口协议、行政卸载、探索线、失败隔离实体），共 23 张（`corpus/cards/`）。
6. **定位决策**：讨论"专一曼哈顿还是整合各案例"，结论为"曼哈顿做壳、群案做证"；
   开发者拍板先做纯曼哈顿版，跨案例元素留扩展位（`corpus/design/blueprint.md`）。
7. **skill 落成**：`skill/` 三文件，安装到 `~/.cursor/skills/manhattan-project/` 或
   `~/.claude/skills/manhattan-project/`，显式点名调用（"用曼哈顿模式启动"）。

## 方法论要点（复用价值）

- **先建档案目录再抽算子**：没有卡片支撑的算子不得写进 SKILL.md。
- **证据分级 A–E**：A 原件/官方调查报告，B 带脚注官方史，C 回忆录，D 研究文献，
  E 科普；仅 D/E 支撑的结论置信度封顶 medium。
- **史料批判**：电影/成功叙事要剥离（如"授权领导"实为两次失败驱动的换人；
  84% 经费在工厂不在实验室；"成功完成使命"掩盖了钚枪式被杀线）。
- **反面清单**：战时特例（保密审查、无限预算、军事化管理）明文标注不可迁移。

## 待办（下一版本）

1. 跨案例反例并入：哈勃（唯一夹具既造又验）、哥伦比亚号（过去成功替代验证）的
   试验门病理；HGP 的 24 小时数据释出机制。
2. 单人多 agent 与多人团队场景是否拆分。
3. 补证：Corona 连续失败续投（杀线边界）、Apollo SP-4205（拍板/接口第二案例）、
   Sapolsky 1972 第 4 章逐页核对。
4. 实战检验：用一个真实高不确定任务跑一轮八段流程，按暴露的问题修订。

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
