---
id: MAN-PARALLEL-02
case: 曼哈顿工程
operator: 不确定度量化 → 决定并行宽度
confidence: high
evidence:
  - source: LOSTROOTS
    grade: D（转引 Groves 回忆录，原文为 C）
    locus: §2.1，1942-10-05 芝加哥会议
---

## 主张

先逼出参数不确定度的量级，再用它决定并行宽度：估计误差在"因子 10"级别时，任何单线规划都是伪精确，唯一理性动作是并行。

## 摘录

Groves 问科学家裂变材料需求量的估计精度，"expected a reply of 'within 25% or 50%'"，得到的回答是"correct within a factor of ten"——需要 100 磅钚，实际可能是 10 到 1000 磅。"It completely destroyed any thought of reasonable planning for the production plants." 随后 Groves 与其委员会决定材料生产与弹体设计均多线并行。

## 转译

- 在方案评审时先问："关键参数的估计误差是 ±30% 还是一个数量级？"
- 误差 ≤±50%：可以单线 + 缓冲。误差跨数量级：并行，且不要假装排期可信。
- agent 场景：对"这个重构要多久/这个方案性能如何"给不出半数量级以内估计时，先做两个便宜的探针实现，不做整体计划。

## 备注

此卡证据是 D 级论文转引 Groves 回忆录（C 级）。判定 high 的理由：因子 10 的困境与随后的并行决策同时被 HEWLETT（B 级）独立记载于第4-5章各厂并建的叙述中。
