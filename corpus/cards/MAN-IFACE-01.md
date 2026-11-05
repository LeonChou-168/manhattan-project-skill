---
id: MAN-IFACE-01
case: 曼哈顿工程
operator: 站点间信息交换协议（接口契约的组织版）
confidence: high
evidence:
  - source: HEWLETT
    grade: B
    locus: 第7章，1943-06-17 Groves 致 Compton/Oppenheimer 的交换规则；1943-10 Oppenheimer 请求实地考察
---

## 主张

跨单元协作不靠善意靠成文协议，协议有四个条款结构：

1. **目的检验**："the only justifiable purpose for interchange was to benefit the work at both laboratories"——交换必须对双方工作有利，单方好奇不算理由。
2. **负面清单**：即使有利于工作，某些类别（产量数据、武器细节、时间表）仍禁止跨站传递。
3. **指定通道**："All contact was to be between authorized persons by specified procedures"——定人、定程序。
4. **修订条款**："provision for any changes that time proved warranted"——协议本身可依据实践修订。

同时记载了协议的一个重要豁免机制：当纸面数据不足以支撑排期时（"No amount of paper estimates could replace first-hand reports on actual operating conditions"），Oppenheimer 申请、Groves 批准了本人实地考察橡树岭——高带宽例外走审批，不走常规通道。

## 转译

- 并行线之间的接口文档四段式：交换目的、禁传清单、指定联系人与格式、修订机制。
- 允许"实地考察"式例外：当一条线的排期依赖另一条线的真实状态时，批准一次高带宽直连（如共读代码/共跑测试），事后回归协议通道。
- agent 场景：子 agent 间不直接互喂中间结论；共享通过声明过的 artifact（schema 固定）传递，特批情况由编排层放行。

## 备注

此卡填补了原先"接口契约"算子仅有 ATL-PARALLEL-01（D 级）的缺口，该算子现在有 B 级主证。
