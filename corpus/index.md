# 超大工程组织算子 · 证据卡片库

吸收自 S/A 档高价值位置（见对话画布 `sa-value-locus`）。
第二轮吸收（2026-08-14）按开发者八段模式的视角回挖 Hewlett 第3/5/7章，补齐选帅、招募、集中管理、接口协议等交互模型所需的段落。规则：

- 一卡一文件，`cards/CASE-OP-##.md`，YAML frontmatter + 摘录。
- 没有卡片支撑的算子不得写进 SKILL.md。
- 证据分级：A 原件/官方调查报告，B 带脚注官方史，C 回忆/单源，D 研究文献，E 科普。
- 仅 D/E 级支撑的卡片 confidence 不得高于 medium；仅 E 级不得高于 low。

## 卡片总览（23 张）

| id | 算子 | 案例 | 置信 |
|---|---|---|---|
| MAN-PARALLEL-01 | 双路径下注 | 曼哈顿 | high |
| MAN-PARALLEL-02 | 不确定度量化→并行 | 曼哈顿 | high |
| MAN-SERIAL-01 | 先并行后串联 | 曼哈顿 | high |
| MAN-KILL-01 | 杀线（钚枪式） | 曼哈顿 | high |
| MAN-KILL-02 | 晚期补线（热扩散） | 曼哈顿 | high |
| MAN-DECIDE-01 | 拍板权收窄+科研/生产分权 | 曼哈顿 | high |
| MAN-INFRA-01 | 经费倒挂（工厂>弹体） | 曼哈顿 | high |
| MAN-RELEASE-01 | 试验门≠发布门 | 曼哈顿 | high |
| POL-TOOL-01 | 管理工具的对外功能 | 北极星 | medium |
| POL-GOAL-01 | 目标服从组织生存 | 北极星 | medium |
| ATL-PARALLEL-01 | 双承包商+兼容接口 | 阿特拉斯 | medium |
| THEORY-01 | 并行下注的决策理论依据 | 1950s 理论 | medium |
| CTRL-DRIFT-01 | 控制如何取代探索（反面） | PPBS/麦克纳马拉 | medium |
| HST-TEST-01 | 试验信号被组织折扣 | 哈勃 | high |
| STS-GATE-01 | 过去成功替代试验（反例） | 航天飞机/CAIB | high |
| HGP-RELEASE-01 | 开放数据即发布门 + 外部对冲 | 人类基因组 | high |
| MAN-LEAD-01 | 授权领导：有责无权→成文全权 | 曼哈顿 | high |
| MAN-RECRUIT-01 | 招募跟问题结构走+底课+外部评审 | 曼哈顿 | high |
| MAN-SITE-01 | 围栏内开放/站点间隔离+注意力保护 | 曼哈顿 | high |
| MAN-IFACE-01 | 站点间信息交换协议 | 曼哈顿 | high |
| MAN-SHIELD-01 | 为技术领导卸行政载荷 | 曼哈顿 | high |
| MAN-EXPLORE-01 | 受限探索线：收缩不清零 | 曼哈顿 | high |
| KEL-SHIELD-01 | 隔离实体承担失败污名 | 曼哈顿/Kellex | high |

## 算子覆盖检查

- 双路径：MAN-PARALLEL-01/02、ATL-PARALLEL-01、HGP-RELEASE-01（外部对冲）✔ 两案例以上
- 杀线：MAN-KILL-01/02 ✔（第二案例缺，Corona 待补）
- 先并行后串联：MAN-SERIAL-01 ✔（HGP 五中心收口可补第二证）
- 拍板/分权：MAN-DECIDE-01、MAN-LEAD-01 ✔
- 试验门：HST-TEST-01、STS-GATE-01、MAN-KILL-01 ✔
- 发布门：MAN-RELEASE-01、HGP-RELEASE-01 ✔
- 接口契约：MAN-IFACE-01（B 级主证）+ ATL-PARALLEL-01（旁证）✔ 已补齐
- 组队/招募：MAN-RECRUIT-01 ✔（单案例，Apollo 招聘史可补）
- 集中管理/注意力保护：MAN-SITE-01、MAN-SHIELD-01 ✔
- 探索线管理：MAN-EXPLORE-01 ✔（单案例）
- 失败隔离实体：KEL-SHIELD-01 ✔（单案例）

## 八段模式覆盖（对应 design/blueprint.md）

1 明确需求 ✔ ｜ 2 遍历人才+授权领导 ✔（MAN-LEAD-01 新增）｜ 3 /grill ✔ ｜ 4 招募人才 ✔（MAN-RECRUIT-01 新增）｜ 5 集中管理/多点并行 ✔（MAN-SITE/SHIELD/IFACE 新增）｜ 6 技术决策 ✔ ｜ 7 试点试验 ✔ ｜ 8 交付=两门 ✔

## 待补（写 skill 前不阻塞，标注即可）

1. COR-KILL：NRO History Vol I 中连续失败后继续投入的管理记录（杀线的边界反例）。
2. APOLLO-MODE：SP-4205 第3章 LOR 杀线；第7章配置控制（拍板/接口第二案例）。
3. Sapolsky 第4章逐页核对（当前引自出版社目录与 2019 重印章节摘要，属 D 级转述）。
4. 招募/探索线/失败隔离三个算子目前均为单案例，非曼哈顿第二证据可后补。
